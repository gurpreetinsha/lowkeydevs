export interface HTMLNode {
  type: 'text' | 'tag';
  name?: string;
  attrs?: Record<string, string>;
  children?: HTMLNode[];
  text?: string;
}

/**
 * A lightweight, pure-TS HTML tokenizer and parser.
 * Decoupled from browser DOM for testing suitability.
 */
export function parseHTML(html: string): HTMLNode[] {
  const root: HTMLNode = { type: 'tag', name: 'root', children: [] };
  let current = root;
  const stack: HTMLNode[] = [root];

  // Regex to match tags: <(/?) ([a-zA-Z1-6]+) (attributes) (/) >
  const tagRegex = /<(\/?)([a-zA-Z1-6]+)([^>]*?)>/g;
  let lastIndex = 0;
  let match;

  while ((match = tagRegex.exec(html)) !== null) {
    const textBefore = html.slice(lastIndex, match.index);
    if (textBefore) {
      current.children!.push({ type: 'text', text: textBefore });
    }

    const isClosing = match[1] === '/';
    const tagName = match[2].toLowerCase();
    const attrStr = match[3];

    // If it's a script or style block contents, ignore it during rendering,
    // but the parser can keep it as tag or text for simplicity.
    if (isClosing) {
      // Find matching tag in the stack
      const index = stack.map(n => n.name).lastIndexOf(tagName);
      if (index !== -1) {
        stack.splice(index);
        current = stack[stack.length - 1] || root;
      }
    } else {
      // Parse attributes
      const attrs: Record<string, string> = {};
      const attrRegex = /([a-zA-Z-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g;
      let attrMatch;
      while ((attrMatch = attrRegex.exec(attrStr)) !== null) {
        attrs[attrMatch[1].toLowerCase()] = attrMatch[2] || attrMatch[3] || attrMatch[4] || '';
      }

      const node: HTMLNode = { type: 'tag', name: tagName, attrs, children: [] };
      current.children!.push(node);

      const isSelfClosing = attrStr.endsWith('/') || 
        ['br', 'img', 'hr', 'input', 'meta', 'link'].includes(tagName);

      if (!isSelfClosing) {
        stack.push(node);
        current = node;
      }
    }
    lastIndex = tagRegex.lastIndex;
  }

  const textAfter = html.slice(lastIndex);
  if (textAfter) {
    current.children!.push({ type: 'text', text: textAfter });
  }

  return root.children!;
}

/**
 * Renders parsed HTML nodes to Markdown string.
 */
function renderNodes(nodes: HTMLNode[], context: { listType?: 'ul' | 'ol'; listIndex?: number } = {}): string {
  let md = '';

  for (const node of nodes) {
    if (node.type === 'text') {
      let t = node.text || '';
      // Unescape HTML entities
      t = t.replace(/&lt;/g, '<')
           .replace(/&gt;/g, '>')
           .replace(/&amp;/g, '&')
           .replace(/&quot;/g, '"')
           .replace(/&#39;/g, "'")
           .replace(/&nbsp;/g, ' ');
      md += t;
    } else if (node.type === 'tag') {
      const name = node.name;
      // Skip styling and script contents
      if (name === 'style' || name === 'script') {
        continue;
      }

      const childrenStr = renderNodes(node.children || [], context);

      switch (name) {
        case 'h1': md += `\n\n# ${childrenStr.trim()}\n\n`; break;
        case 'h2': md += `\n\n## ${childrenStr.trim()}\n\n`; break;
        case 'h3': md += `\n\n### ${childrenStr.trim()}\n\n`; break;
        case 'h4': md += `\n\n#### ${childrenStr.trim()}\n\n`; break;
        case 'h5': md += `\n\n##### ${childrenStr.trim()}\n\n`; break;
        case 'h6': md += `\n\n###### ${childrenStr.trim()}\n\n`; break;
        case 'p': md += `\n\n${childrenStr.trim()}\n\n`; break;
        case 'strong':
        case 'b': md += `**${childrenStr}**`; break;
        case 'em':
        case 'i': md += `*${childrenStr}*`; break;
        case 'code':
          md += `\`${childrenStr}\``;
          break;
        case 'pre': {
          const codeText = renderNodesPlain(node.children || []);
          md += `\n\n\`\`\`\n${codeText.trim()}\n\`\`\`\n\n`;
          break;
        }
        case 'blockquote':
          md += `\n\n> ${childrenStr.trim().replace(/\n/g, '\n> ')}\n\n`;
          break;
        case 'br':
          md += '\n';
          break;
        case 'hr':
          md += '\n\n---\n\n';
          break;
        case 'a': {
          const href = node.attrs?.href || '';
          md += `[${childrenStr}](${href})`;
          break;
        }
        case 'img': {
          const src = node.attrs?.src || '';
          const alt = node.attrs?.alt || '';
          md += `![${alt}](${src})`;
          break;
        }
        case 'ul':
          md += `\n\n${renderNodes(node.children || [], { listType: 'ul' }).trim()}\n\n`;
          break;
        case 'ol':
          md += `\n\n${renderNodes(node.children || [], { listType: 'ol', listIndex: 1 }).trim()}\n\n`;
          break;
        case 'li': {
          if (context.listType === 'ol') {
            const idx = context.listIndex || 1;
            md += `\n${idx}. ${childrenStr.trim()}`;
            context.listIndex = idx + 1;
          } else {
            md += `\n- ${childrenStr.trim()}`;
          }
          break;
        }
        default:
          md += childrenStr; // Direct rendering for wrappers like div, span
      }
    }
  }

  return md;
}

/**
 * Helper to render nodes as plain text (e.g. for code blocks).
 */
function renderNodesPlain(nodes: HTMLNode[]): string {
  let text = '';
  for (const node of nodes) {
    if (node.type === 'text') {
      text += node.text;
    } else if (node.type === 'tag') {
      text += renderNodesPlain(node.children || []);
    }
  }
  return text;
}

/**
 * Converts a raw HTML string into Markdown formatting.
 */
export function htmlToMarkdown(html: string): string {
  if (!html.trim()) return '';
  const nodes = parseHTML(html);
  return renderNodes(nodes)
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}
