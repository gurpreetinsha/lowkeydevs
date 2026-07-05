export interface CitationInputs {
  type: 'book' | 'website' | 'journal';
  authors: string; // e.g. "Smith, J., & Jones, M." or "John Smith" -> we will format or assume they format correctly, or help split them
  year: string; // Year of publication (e.g. 2026, or n.d.)
  title: string; // Title of the work
  publisherOrSite: string; // Publisher (book), Site name (website), Journal name (journal)
  url: string; // URL / DOI
  volume: string; // journal only
  issue: string; // journal only
  pages: string; // journal only
}

/**
 * Format author names into standard APA format.
 * E.g., "John Smith" -> "Smith, J."
 * E.g., "John Fitzgerald Smith" -> "Smith, J. F."
 */
export function formatAuthors(authorsStr: string): string {
  if (!authorsStr) return '';
  
  const authors = authorsStr.split(/&| and /i).map(a => a.trim()).filter(a => a.length > 0);
  
  const formattedList = authors.map(author => {
    // If it's already in Last, F. M. format (has commas)
    if (author.includes(',')) return author;

    const parts = author.split(/\s+/);
    if (parts.length === 1) return parts[0];
    
    const lastName = parts[parts.length - 1];
    const initials = parts.slice(0, -1).map(p => `${p[0].toUpperCase()}.`).join(' ');
    
    return `${lastName}, ${initials}`;
  });

  if (formattedList.length === 0) return '';
  if (formattedList.length === 1) return formattedList[0];
  if (formattedList.length === 2) return `${formattedList[0]} & ${formattedList[1]}`;
  
  return `${formattedList.slice(0, -1).join(', ')}, & ${formattedList[formattedList.length - 1]}`;
}

export interface CitationResult {
  plainText: string;
  html: string;
}

/**
 * Generates an APA 7th edition citation.
 */
export function generateApa7Citation(inputs: CitationInputs): CitationResult {
  const { type, year, title, publisherOrSite, url, volume, issue, pages } = inputs;
  const authorFormatted = formatAuthors(inputs.authors);
  
  const cleanYear = year.trim() || 'n.d.';
  const displayYear = cleanYear === 'n.d.' ? 'n.d.' : cleanYear;

  let plainText = '';
  let html = '';

  if (type === 'book') {
    // Author, A. A. (Year). Title of book. Publisher.
    const authorPart = authorFormatted ? `${authorFormatted} ` : '';
    plainText = `${authorPart}(${displayYear}). ${title}. ${publisherOrSite}.`;
    html = `${authorPart}(${displayYear}). <i>${title}</i>. ${publisherOrSite}.`;
    if (url.trim()) {
      plainText += ` ${url.trim()}`;
      html += ` <a href="${url.trim()}" target="_blank" rel="noopener noreferrer">${url.trim()}</a>`;
    }
  } else if (type === 'website') {
    // Author, A. A. (Year, Month Day). Title of page. Site Name. URL
    const authorPart = authorFormatted ? `${authorFormatted} ` : '';
    plainText = `${authorPart}(${displayYear}). ${title}. ${publisherOrSite}. ${url.trim()}`;
    html = `${authorPart}(${displayYear}). <i>${title}</i>. ${publisherOrSite}. <a href="${url.trim()}" target="_blank" rel="noopener noreferrer">${url.trim()}</a>`;
  } else {
    // Journal: Author, A. A. (Year). Title of article. Title of Journal, Volume(Issue), Pages. URL
    const authorPart = authorFormatted ? `${authorFormatted} ` : '';
    
    let journalSpecPlain = '';
    let journalSpecHtml = '';
    
    if (publisherOrSite) {
      journalSpecPlain += `${publisherOrSite}`;
      journalSpecHtml += `<i>${publisherOrSite}</i>`;
    }
    
    if (volume) {
      journalSpecPlain += `, ${volume}`;
      journalSpecHtml += `, <i>${volume}</i>`;
    }
    
    if (issue) {
      journalSpecPlain += `(${issue})`;
      journalSpecHtml += `(${issue})`;
    }
    
    if (pages) {
      journalSpecPlain += `, ${pages}`;
      journalSpecHtml += `, ${pages}`;
    }

    plainText = `${authorPart}(${displayYear}). ${title}. ${journalSpecPlain}.`;
    html = `${authorPart}(${displayYear}). ${title}. ${journalSpecHtml}.`;

    if (url.trim()) {
      plainText += ` ${url.trim()}`;
      html += ` <a href="${url.trim()}" target="_blank" rel="noopener noreferrer">${url.trim()}</a>`;
    }
  }

  return { plainText, html };
}
