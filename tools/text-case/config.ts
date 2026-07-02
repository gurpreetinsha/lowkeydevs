import { ToolConfig } from "@/schemas/tool";

export const config: ToolConfig = {
  title: "Text Case Converter",
  slug: "text-case",
  description: "Convert blocks of text between UPPERCASE, lowercase, Title Case, Sentence Case, camelCase, kebab-case, and slugify, with built-in character count metrics.",
  keywords: ["case converter", "text case changer", "title case converter", "slugify text", "word counter", "character counter"],
  category: "text",
  icon: "Type",
  color: "amber",
  inputs: [
    {
      id: "text",
      label: "Input Text",
      type: "textarea",
      defaultValue: "The quick brown fox jumps over the lazy dog. lowkeydevs represents high-performance utility engineering.",
      placeholder: "Paste or type your text here...",
      validation: {
        required: true,
        message: "Please enter some text to convert."
      }
    },
    {
      id: "caseType",
      label: "Convert To",
      type: "select",
      defaultValue: "upper",
      options: [
        { label: "UPPERCASE", value: "upper" },
        { label: "lowercase", value: "lower" },
        { label: "Title Case", value: "title" },
        { label: "Sentence Case", value: "sentence" },
        { label: "camelCase", value: "camel" },
        { label: "kebab-case", value: "kebab" },
        { label: "slugify", value: "slug" }
      ]
    }
  ],
  outputs: [
    {
      id: "convertedText",
      label: "Converted Output",
      type: "text", // Display as textarea in form builder if output type is textarea/text
    },
    {
      id: "wordCount",
      label: "Word Count",
      type: "number",
      precision: 0
    },
    {
      id: "charCount",
      label: "Character Count",
      type: "number",
      precision: 0
    },
    {
      id: "readTime",
      label: "Est. Reading Time",
      type: "text"
    }
  ],
  formula: {
    description: "Strings are processed character by character using regex and text transformations. Statistics are derived using split functions and base read rates (average 200 words per minute).",
    latex: "\\text{Words} = \\text{String.split}(\\text{regex})",
    steps: [
      "UPPERCASE: String.toUpperCase().",
      "lowercase: String.toLowerCase().",
      "Title Case: Capitalizes first letter of every word.",
      "Sentence Case: Capitalizes first letter of each sentence.",
      "camelCase: Removes spaces and capitalization boundaries.",
      "slugify: Lowercases, removes punctuation, replaces spaces with dashes.",
      "Read Time: Words / 200 words per minute."
    ],
  },
  examples: [
    {
      inputs: { text: "hello world", caseType: "upper" },
      outputs: { convertedText: "HELLO WORLD", wordCount: 2, charCount: 11, readTime: "Less than a minute" },
      explanation: "'hello world' converted to uppercase is 'HELLO WORLD', containing 2 words and 11 characters.",
    }
  ],
  faq: [
    {
      question: "How is reading time calculated?",
      answer: "We divide the total word count by an average reading speed of 200 words per minute. If the result is under 1 minute, it displays 'Less than a minute'.",
    }
  ],
  relatedTools: ["hex-rgb"],
  status: "published",
  featured: false,
  trending: false
};
