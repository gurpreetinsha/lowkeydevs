import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'cron-expression-descriptor',
  title: 'Cron Expression Descriptor & Generator',
  description: 'Convert cron expressions into human-readable English descriptions, view upcoming schedules, and build expressions interactively.',
  category: 'dev-utils',
  keywords: [
    'cron descriptor',
    'cron expression descriptor',
    'cron generator',
    'crontab generator',
    'cron translator',
    'cron schedule viewer',
    'cron schedule',
  ],
  icon: 'Clock',
  faqs: [
    {
      question: 'What is a cron expression?',
      answer: 'A cron expression is a string of five fields separated by spaces that represents a schedule for running a command or task. The fields represent Minute, Hour, Day of Month, Month, and Day of Week.',
    },
    {
      question: 'How do step values work in cron?',
      answer: 'Step values are represented by a slash (/). For example, "*/15" in the minute field means "every 15 minutes", and "1-5/2" in the day of week field means "every 2 days from Monday through Friday".',
    },
    {
      question: 'Does this tool support seconds or years?',
      answer: 'This tool currently supports standard 5-field crontab schedules which are the most common in Unix/Linux systems and cloud-schedulers (like AWS EventBridge, Google Cloud Scheduler, or GitHub Actions).',
    },
  ],
  educationalContent: {
    whatIsIt: 'Cron is a time-based job scheduler in Unix-like computer operating systems. Schedulers use cron expressions to set tasks to run periodically. Since cron expressions are written in a compact code format (e.g. "0 9 * * 1-5"), it is easy to misconfigure them. A Cron Descriptor translates these codes into plain English sentences and calculates upcoming fire times so you can verify your schedule with confidence.',
    howToUse: '1. Paste or type your cron expression in the input field.\n2. The human-readable description and field-by-field breakdown will display instantly.\n3. Verify the "Upcoming Schedules" list to confirm that the trigger dates match your intent.\n4. Use the "Interactive Builder" dropdowns to easily modify or generate a cron expression from scratch.',
    proTips: [
      'Hover over or check the breakdown table to see how each part of the expression is evaluated.',
      'Common cron patterns are available in the presets menu to get you started quickly.',
    ],
  },
};
