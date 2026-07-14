// Cron Expression Descriptor & Scheduler Logic

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const WEEKDAY_NAMES = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
];

// Helper to expand list/range/step to a set of valid numbers
export function parseFieldToSet(field: string, min: number, max: number, type?: 'month' | 'dow'): Set<number> {
  const result = new Set<number>();
  
  // Clean field values (convert string shortnames like JAN, SUN to numbers)
  let cleanField = field.trim().toUpperCase();
  if (type === 'month') {
    const monthShorts = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    monthShorts.forEach((short, idx) => {
      cleanField = cleanField.replace(new RegExp(short, 'g'), String(idx + 1));
    });
  } else if (type === 'dow') {
    const dayShorts = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    dayShorts.forEach((short, idx) => {
      cleanField = cleanField.replace(new RegExp(short, 'g'), String(idx));
    });
    // Replace '7' with '0' as both can mean Sunday
  }

  if (cleanField === '*') {
    for (let val = min; val <= max; val++) {
      result.add(val);
    }
    if (type === 'dow' && result.has(0)) result.add(7); // normalize Sunday
    return result;
  }

  const parts = cleanField.split(',');
  for (const part of parts) {
    if (part.includes('/')) {
      const [rangePart, stepPart] = part.split('/');
      const step = parseInt(stepPart, 10);
      if (isNaN(step) || step <= 0) continue;

      let start = min;
      let end = max;

      if (rangePart !== '*') {
        if (rangePart.includes('-')) {
          const [s, e] = rangePart.split('-');
          start = parseInt(s, 10);
          end = parseInt(e, 10);
        } else {
          start = parseInt(rangePart, 10);
        }
      }

      for (let val = start; val <= end; val += step) {
        if (val >= min && val <= max) {
          result.add(val);
        }
      }
    } else if (part.includes('-')) {
      const [s, e] = part.split('-');
      const start = parseInt(s, 10);
      const end = parseInt(e, 10);
      if (!isNaN(start) && !isNaN(end)) {
        for (let val = start; val <= end; val++) {
          if (val >= min && val <= max) {
            result.add(val);
          }
        }
      }
    } else {
      const val = parseInt(part, 10);
      if (!isNaN(val) && val >= min && val <= max) {
        result.add(val);
      }
    }
  }

  // Normalize Sundays for dow
  if (type === 'dow') {
    if (result.has(0)) result.add(7);
    if (result.has(7)) result.add(0);
  }

  return result;
}

// Describe a single field value in human terms
function describeFieldPart(field: string, min: number, max: number, nameSingular: string, namePlural: string, valMap?: (v: number) => string): string {
  const clean = field.trim().toUpperCase();
  if (clean === '*') {
    return `every ${nameSingular}`;
  }

  // Helper to format values
  const formatVal = (v: number) => (valMap ? valMap(v) : String(v));

  if (clean.includes('/')) {
    const [range, stepPart] = clean.split('/');
    const step = parseInt(stepPart, 10);
    const stepDesc = `every ${step} ${namePlural}`;

    if (range === '*') {
      return stepDesc;
    } else if (range.includes('-')) {
      const [start, end] = range.split('-').map(Number);
      return `${stepDesc} from ${formatVal(start)} through ${formatVal(end)}`;
    } else {
      const start = parseInt(range, 10);
      return `${stepDesc} starting from ${formatVal(start)}`;
    }
  }

  if (clean.includes('-')) {
    const [start, end] = clean.split('-').map(Number);
    return `from ${formatVal(start)} through ${formatVal(end)}`;
  }

  const values = clean.split(',').map(Number);
  if (values.length === 1) {
    return formatVal(values[0]);
  }

  // Format list (e.g. 1, 2, 3 -> 1, 2 and 3)
  const formattedVals = values.map(formatVal);
  const last = formattedVals.pop();
  return `${formattedVals.join(', ')} and ${last}`;
}

// Describe Hours into nice AM/PM format
function formatHour(h: number): string {
  if (h === 0) return '12:00 AM (midnight)';
  if (h === 12) return '12:00 PM (noon)';
  const ampm = h >= 12 ? 'PM' : 'AM';
  const displayHour = h % 12 === 0 ? 12 : h % 12;
  return `${displayHour}:00 ${ampm}`;
}

// Combine fields into elegant human description
export function describeCron(cronExpression: string): {
  description: string;
  parts: {
    minute: string;
    hour: string;
    dom: string;
    month: string;
    dow: string;
  };
} {
  const parts = cronExpression.trim().split(/\s+/);
  if (parts.length !== 5) {
    throw new Error('Cron expression must have exactly 5 fields (minute, hour, day-of-month, month, day-of-week)');
  }

  const [minField, hourField, domField, monthField, dowField] = parts;

  // Let's validate syntax
  const minutes = parseFieldToSet(minField, 0, 59);
  const hours = parseFieldToSet(hourField, 0, 23);
  const doms = parseFieldToSet(domField, 1, 31);
  const months = parseFieldToSet(monthField, 1, 12, 'month');
  const dows = parseFieldToSet(dowField, 0, 7, 'dow');

  if (minutes.size === 0 || hours.size === 0 || doms.size === 0 || months.size === 0 || dows.size === 0) {
    throw new Error('Cron expression contains invalid field values');
  }

  // Describe individual parts
  const minDesc = describeFieldPart(minField, 0, 59, 'minute', 'minutes');
  const hourDesc = describeFieldPart(hourField, 0, 23, 'hour', 'hours', formatHour);
  const domDesc = describeFieldPart(domField, 1, 31, 'day', 'days', (v) => `day ${v}`);
  const monthDesc = describeFieldPart(monthField, 1, 12, 'month', 'months', (v) => MONTH_NAMES[v - 1]);
  const dowDesc = describeFieldPart(dowField, 0, 7, 'day of the week', 'days of the week', (v) => WEEKDAY_NAMES[v]);

  // Combine into a sentence
  let finalDescription = '';

  // 1. Time description (Minutes + Hours combination if simple)
  const isMinSingleVal = !minField.includes(',') && !minField.includes('-') && !minField.includes('/');
  const isHourSingleVal = !hourField.includes(',') && !hourField.includes('-') && !hourField.includes('/');
  
  if (isMinSingleVal && isHourSingleVal && minField !== '*' && hourField !== '*') {
    const minVal = parseInt(minField, 10);
    const hourVal = parseInt(hourField, 10);
    const ampm = hourVal >= 12 ? 'PM' : 'AM';
    const displayHour = hourVal % 12 === 0 ? 12 : hourVal % 12;
    const displayMin = minVal < 10 ? '0' + minVal : minVal;
    
    let timeStr = `${displayHour}:${displayMin} ${ampm}`;
    if (hourVal === 0 && minVal === 0) timeStr = 'midnight';
    if (hourVal === 12 && minVal === 0) timeStr = 'noon';
    
    finalDescription = `At ${timeStr}`;
  } else {
    // If not a simple single time
    let m = minDesc;
    if (minField !== '*' && !minField.includes('/')) {
      m = `at minute ${minDesc}`;
    }
    
    let h = hourDesc;
    if (hourField !== '*' && !hourField.includes('/') && !hourDesc.startsWith('from')) {
      h = `at ${hourDesc}`;
    }

    finalDescription = `${m} ${h}`;
    // Capitalize first letter
    finalDescription = finalDescription.charAt(0).toUpperCase() + finalDescription.slice(1);
  }

  // 2. Day of Month & Weekday logic
  let daySection = '';
  if (domField !== '*' && dowField !== '*') {
    daySection = `on ${domDesc} and ${dowDesc}`;
  } else if (domField !== '*') {
    daySection = `on ${domDesc}`;
  } else if (dowField !== '*') {
    daySection = `on ${dowDesc}`;
  } else {
    daySection = 'every day';
  }

  // 3. Month logic
  let monthSection = '';
  if (monthField !== '*') {
    monthSection = `in ${monthDesc}`;
  }

  const sentence = `${finalDescription}, ${daySection} ${monthSection}`.replace(/\s+/g, ' ').trim();
  
  // Format punctuation nicely (remove trailing commas, etc.)
  let finishedSentence = sentence;
  if (finishedSentence.endsWith(',')) {
    finishedSentence = finishedSentence.slice(0, -1);
  }
  finishedSentence += '.';

  return {
    description: finishedSentence,
    parts: {
      minute: minDesc.charAt(0).toUpperCase() + minDesc.slice(1),
      hour: hourDesc.charAt(0).toUpperCase() + hourDesc.slice(1),
      dom: domDesc.charAt(0).toUpperCase() + domDesc.slice(1),
      month: monthDesc.charAt(0).toUpperCase() + monthDesc.slice(1),
      dow: dowDesc.charAt(0).toUpperCase() + dowDesc.slice(1)
    }
  };
}

// Compute the next 5 schedule fire times
export function getNextExecutionTimes(cronExpression: string, count: number = 5): Date[] {
  const parts = cronExpression.trim().split(/\s+/);
  if (parts.length !== 5) {
    throw new Error('Invalid cron expression');
  }

  const [minField, hourField, domField, monthField, dowField] = parts;

  const allowedMinutes = parseFieldToSet(minField, 0, 59);
  const allowedHours = parseFieldToSet(hourField, 0, 23);
  const allowedDoms = parseFieldToSet(domField, 1, 31);
  const allowedMonths = parseFieldToSet(monthField, 1, 12, 'month');
  const allowedDows = parseFieldToSet(dowField, 0, 7, 'dow');

  const result: Date[] = [];
  let current = new Date();
  
  // Start from the next minute onwards
  current.setSeconds(0);
  current.setMilliseconds(0);
  current.setMinutes(current.getMinutes() + 1);

  const startYear = current.getFullYear();
  
  // Search window of 5 years max to prevent infinite loops (e.g. Feb 30th)
  while (result.length < count && current.getFullYear() < startYear + 5) {
    // 1. Month check
    const m = current.getMonth() + 1; // JS months are 0-11
    if (!allowedMonths.has(m)) {
      current.setMonth(current.getMonth() + 1);
      current.setDate(1);
      current.setHours(0);
      current.setMinutes(0);
      continue;
    }

    // 2. Day of Month / Day of Week check
    // Note: in standard cron, if both DOM and DOW are restricted (not *),
    // the schedule fires if EITHER matches. If only one is restricted, it must match.
    // Let's implement this standard behavior!
    const domRestricted = domField !== '*';
    const dowRestricted = dowField !== '*';
    const dom = current.getDate();
    const dow = current.getDay(); // Sunday is 0, Monday is 1, etc.
    
    let dayMatches = true;
    if (domRestricted && dowRestricted) {
      dayMatches = allowedDoms.has(dom) || allowedDows.has(dow);
    } else if (domRestricted) {
      dayMatches = allowedDoms.has(dom);
    } else if (dowRestricted) {
      dayMatches = allowedDows.has(dow);
    }

    if (!dayMatches) {
      current.setDate(current.getDate() + 1);
      current.setHours(0);
      current.setMinutes(0);
      continue;
    }

    // 3. Hour check
    const h = current.getHours();
    if (!allowedHours.has(h)) {
      current.setHours(current.getHours() + 1);
      current.setMinutes(0);
      continue;
    }

    // 4. Minute check
    const min = current.getMinutes();
    if (!allowedMinutes.has(min)) {
      current.setMinutes(current.getMinutes() + 1);
      continue;
    }

    // Matches all constraints!
    result.push(new Date(current.getTime()));
    current.setMinutes(current.getMinutes() + 1);
  }

  return result;
}
