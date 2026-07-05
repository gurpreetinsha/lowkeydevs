/**
 * Formats a raw JSON string.
 * @param jsonString The raw JSON string
 * @param spacing Indentation spacing (number of spaces or string tab)
 * @returns Formatted JSON string
 * @throws Error if JSON is invalid
 */
export function formatJson(jsonString: string, spacing: number | string = 2): string {
  const trimmed = jsonString.trim();
  if (!trimmed) return '';
  
  // Parse first to validate JSON correctness
  const parsed = JSON.parse(trimmed);
  
  // Handle tab spacing or parse spacing number
  const indent = spacing === 'tab' ? '\t' : Number(spacing);
  return JSON.stringify(parsed, null, indent);
}

/**
 * Minifies a JSON string.
 * @param jsonString The raw JSON string
 * @returns Compacted JSON string
 * @throws Error if JSON is invalid
 */
export function minifyJson(jsonString: string): string {
  const trimmed = jsonString.trim();
  if (!trimmed) return '';
  
  const parsed = JSON.parse(trimmed);
  return JSON.stringify(parsed);
}
