/**
 * Detects if the given Unix timestamp is in milliseconds (usually 13 digits) or seconds (usually 10 digits).
 */
export function isMilliseconds(epoch: number): boolean {
  return Math.abs(epoch) > 99999999999;
}

/**
 * Converts a Unix epoch timestamp (seconds or milliseconds) to an RFC 1123 UTC date string.
 */
export function epochToUtc(epoch: number, isMs?: boolean): string {
  const detectMs = isMs ?? isMilliseconds(epoch);
  const ms = detectMs ? epoch : epoch * 1000;
  const date = new Date(ms);
  
  if (isNaN(date.getTime())) {
    throw new Error('Invalid Unix epoch timestamp');
  }
  
  return date.toUTCString();
}

/**
 * Converts a Unix epoch timestamp (seconds or milliseconds) to a human-readable local date string.
 */
export function epochToLocal(epoch: number, isMs?: boolean): string {
  const detectMs = isMs ?? isMilliseconds(epoch);
  const ms = detectMs ? epoch : epoch * 1000;
  const date = new Date(ms);
  
  if (isNaN(date.getTime())) {
    throw new Error('Invalid Unix epoch timestamp');
  }
  
  return date.toString();
}

/**
 * Converts human-specified date-time components into Unix seconds and milliseconds.
 * Note: month is 1-indexed (1-12).
 */
export function humanDateToEpoch(
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
  second: number,
  ms: number,
  isUtc: boolean = false
): { seconds: number; milliseconds: number } {
  const monthIndex = month - 1; // JS Date months are 0-11
  let date: Date;
  
  if (isUtc) {
    date = new Date(Date.UTC(year, monthIndex, day, hour, minute, second, ms));
  } else {
    date = new Date(year, monthIndex, day, hour, minute, second, ms);
  }
  
  const totalMs = date.getTime();
  if (isNaN(totalMs)) {
    throw new Error('Invalid date components entered');
  }
  
  return {
    seconds: Math.floor(totalMs / 1000),
    milliseconds: totalMs
  };
}
