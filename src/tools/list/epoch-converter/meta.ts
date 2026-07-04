import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'epoch-converter',
  title: 'Epoch Time Converter',
  description: 'Convert Unix epoch timestamps to human-readable date-times (UTC and local) and vice versa. Includes a real-time updating Unix clock.',
  category: 'dev-utils',
  keywords: ['epoch converter', 'unix timestamp converter', 'unix time', 'epoch to date', 'date to timestamp', 'epoch clock'],
  icon: 'Clock',
  faqs: [
    {
      question: 'What is Unix Epoch time?',
      answer: 'Unix time is a system for describing points in time, defined as the number of seconds (or milliseconds) that have elapsed since 00:00:00 UTC on Thursday, 1 January 1970.'
    },
    {
      question: 'Does this tool support milliseconds?',
      answer: 'Yes, it automatically detects whether your input is in seconds (10-digit number) or milliseconds (13-digit number) and parses it correctly.'
    }
  ],
  educationalContent: {
    whatIsIt: 'An Epoch Time Converter maps Unix timestamps to human-readable calendar dates and times, adjusting for UTC and your local timezone.',
    howToUse: 'To convert a timestamp, type or paste it into the "Timestamp" input field. The UTC and Local date representations will update instantly. To convert a date to a timestamp, enter the date/time parameters in the input fields below.',
    proTips: [
      'Use the pause button on the real-time Unix clock to freeze the current time and copy its exact value.',
      'Auto-detection works for epochs from 1970 to 2286 by parsing the digit length.'
    ]
  }
};
