import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'unit-converter',
  title: 'Unit Converter',
  description: 'Convert length, weight, temperature, area, volume, speed, time, and digital storage units instantly. Interactive calculator with formulas.',
  category: 'converters',
  keywords: [
    'unit converter',
    'cm to feet',
    'kg to lbs',
    'celsius to fahrenheit',
    'measurement converter',
    'length converter',
    'weight converter',
    'temperature converter',
    'data storage converter'
  ],
  icon: 'RefreshCw',
  faqs: [
    {
      question: 'How do I convert centimeters to feet?',
      answer: '1 centimeter is equal to 0.0328084 feet. To convert, multiply the value in centimeters by 0.0328084, or divide it by 30.48.'
    },
    {
      question: 'Does this tool support negative values?',
      answer: 'Yes, negative values are fully supported, which is particularly useful for temperature conversions (e.g., negative Celsius or Fahrenheit values).'
    },
    {
      question: 'Are these conversions calculated locally?',
      answer: 'Yes, all calculations are performed locally in your web browser using client-side JavaScript. No data is sent to any server, making it fast and secure.'
    }
  ],
  educationalContent: {
    whatIsIt: 'The Unit Converter is an all-in-one utility that lets you translate values between different units of measurement. It supports categories such as Length, Weight/Mass, Temperature, Area, Volume, Speed, Time, and Digital Storage, satisfying everyday conversion needs for developer projects, construction, cooking, and science.',
    howToUse: '1. Select a category of measurement at the top (e.g., Length or Temperature).\n2. Input the numerical value you want to convert in the "From" input box.\n3. Use the dropdown menus to select the starting unit ("From") and target unit ("To").\n4. The converted value, formula explanation, and comprehensive conversion reference table will update instantly.\n5. Click the copy button to copy the result, or click the swap button to reverse the conversion.',
    proTips: [
      'You can type negative values (like -40 for Celsius/Fahrenheit) for temperature units.',
      'Clicking any row in the Reference Table on the right will automatically load that target unit as your "To" selection in the calculator.'
    ]
  }
};
