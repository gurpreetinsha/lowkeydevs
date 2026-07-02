export function calculate(inputs: Record<string, any>): Record<string, any> {
  const text = inputs.text || "";
  const caseType = inputs.caseType || "upper";

  if (!text) {
    return {
      convertedText: "",
      wordCount: 0,
      charCount: 0,
      readTime: "0 min read",
    };
  }

  let convertedText = "";

  switch (caseType) {
    case "upper":
      convertedText = text.toUpperCase();
      break;

    case "lower":
      convertedText = text.toLowerCase();
      break;

    case "title":
      convertedText = text
        .toLowerCase()
        .replace(/\b[a-z]/g, (char: string) => char.toUpperCase());
      break;

    case "sentence":
      // Capitalize first character, and characters immediately following sentences (.!? followed by space)
      convertedText = text
        .toLowerCase()
        .replace(/(^\s*|[.!?]\s+)([a-z])/g, (match: string) => match.toUpperCase());
      break;

    case "camel":
      convertedText = text
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (match: string, chr: string) => chr.toUpperCase())
        .replace(/[^a-zA-Z0-9]/g, "");
      // Ensure first character is lowercase
      if (convertedText.length > 0) {
        convertedText = convertedText.charAt(0).toLowerCase() + convertedText.slice(1);
      }
      break;

    case "kebab":
      convertedText = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
      break;

    case "slug":
      convertedText = text
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/[\s_]+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-+|-+$/g, "");
      break;

    default:
      convertedText = text;
  }

  // Calculate text metrics
  const charCount = text.length;
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  
  const wpm = 200;
  const readingTimeMins = Math.ceil(wordCount / wpm);
  const readTime = wordCount <= 200 ? "Less than a minute" : `${readingTimeMins} min read`;

  return {
    convertedText,
    wordCount,
    charCount,
    readTime,
  };
}
