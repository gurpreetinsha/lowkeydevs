import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'bmi-calculator',
  title: 'BMI Calculator',
  description: 'Calculate your Body Mass Index (BMI) instantly. Support for Metric and Imperial units, healthy weight ranges, and personalized weight targets.',
  category: 'dev-utils',
  icon: 'Activity',
  keywords: [
    'bmi calculator',
    'body mass index',
    'calculate bmi',
    'healthy weight calculator',
    'ideal weight range',
    'bmi index',
    'body fat index',
    'weight class calculator'
  ],
  faqs: [
    {
      question: 'What is BMI (Body Mass Index)?',
      answer: 'Body Mass Index (BMI) is a simple numerical calculation that uses a person\'s height and weight to estimate their body fat. It is a widely accepted screening tool to identify whether a person is underweight, normal weight, overweight, or obese, and can help indicate potential health risks associated with weight.'
    },
    {
      question: 'How is BMI calculated?',
      answer: 'BMI is calculated by dividing weight by height squared. For metric measurements, the formula is BMI = weight (kg) / [height (m)]². For imperial measurements, the formula is BMI = 703 × weight (lbs) / [height (in)]².'
    },
    {
      question: 'What is a healthy BMI range?',
      answer: 'According to the World Health Organization (WHO), a healthy or normal BMI range for adults is between 18.5 and 24.9. A BMI below 18.5 indicates underweight, 25.0 to 29.9 indicates overweight, and 30.0 or higher indicates obesity.'
    },
    {
      question: 'Is BMI accurate for everyone?',
      answer: 'While BMI is a useful screening tool, it has limitations. Because it only accounts for total weight and height, it does not distinguish between muscle mass and fat mass. As a result, highly muscular individuals (like athletes or bodybuilders) may have a high BMI classifying them as overweight or obese, despite having low body fat. Conversely, elderly individuals or people with low muscle mass may have a normal BMI while carrying excess body fat.'
    },
    {
      question: 'Does this calculator store my measurements?',
      answer: 'No. Lowkeydevs prioritizes user privacy. All measurements are processed entirely in your browser. No height, weight, or calculated health data is sent to our servers, stored in logs, or shared with third parties.'
    }
  ],
  educationalContent: {
    whatIsIt: 'The BMI Calculator is an interactive, private, client-side utility designed to help users quickly assess their Body Mass Index. It calculates the classification of their weight using the official guidelines of the World Health Organization (WHO) and provides the healthy weight range for their specific height. By offering both Metric and Imperial support, it is convenient for users worldwide. Remember that BMI is a general indicator of body fat and should be interpreted alongside other clinical measures of health.',
    howToUse: '1. Select your preferred measurement system (Metric or Imperial) using the unit selector at the top.\n2. In Metric mode: Adjust the sliders or enter your height in centimeters (cm) and your weight in kilograms (kg).\n3. In Imperial mode: Enter your height in feet (ft) and inches (in), and adjust your weight in pounds (lbs).\n4. View your calculated BMI score, classification category, and target healthy weight range instantly in the results panel.\n5. Adjust inputs dynamically to see how changes in weight affect your BMI score in real time.',
    proTips: [
      'For the most accurate result, measure your weight in the morning before eating and without shoes.',
      'If you have a high muscle mass or participate in heavy strength training, focus on waist circumference or body fat percentage rather than relying solely on BMI.',
      'Consult a healthcare provider before making significant changes to your diet, exercise routine, or weight loss plan based on BMI calculations.'
    ]
  }
};
