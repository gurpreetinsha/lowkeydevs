import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'lorem-ipsum-generator',
  title: 'Lorem Ipsum & Dummy Data Generator',
  description: 'Generate placeholder Lorem Ipsum paragraphs, words, sentences, or list items. Create mock JSON or CSV records for usernames, emails, addresses, and more.',
  category: 'generators',
  keywords: ['lorem ipsum generator', 'dummy data generator', 'mock data generator', 'placeholder text', 'lorem ipsum paragraphs', 'json dummy data', 'mock database records'],
  icon: 'filetext',
  faqs: [
    {
      question: 'What is Lorem Ipsum?',
      answer: 'Lorem Ipsum is standard placeholder text used in design and publishing to demonstrate the visual form of a document without relying on meaningful content. It has been the industry standard since the 1500s.'
    },
    {
      question: 'What kind of dummy data can I generate?',
      answer: 'You can generate structured user lists in JSON or CSV format. Customizable fields include ID, First Name, Last Name, Username, Email, Phone, Address, and Company. This is perfect for populating databases, seeding mock APIs, or UI development.'
    },
    {
      question: 'Is there a limit to how much data I can generate?',
      answer: 'To ensure fast rendering, we allow generating up to 50 paragraphs of Lorem Ipsum or up to 100 records of mock user data at a time. All data is generated client-side instantly.'
    }
  ],
  educationalContent: {
    whatIsIt: 'The Lorem Ipsum & Dummy Data Generator is an essential utility for designers, developers, and writers. It provides customizable latin placeholder text for typesetting layouts and mock structured tables (JSON/CSV) to simulate database content for testing dynamic applications.',
    howToUse: '1. Choose between the "Lorem Ipsum" tab or "Dummy Data" tab.\n2. In the "Lorem Ipsum" tab, select the unit type (Paragraphs, Words, Sentences, Lists) and drag the slider to set the quantity.\n3. Click "Copy" or "Download Text File" to save.\n4. In the "Dummy Data" tab, check the fields you want to include (e.g. email, company), select the number of rows, and select the output format (JSON or CSV) to see your mockup generated instantly.',
    proTips: [
      'Toggle the "Start with Lorem Ipsum" option if your mockups require the classic latin opening text.',
      'Export mock user data to CSV to quickly import it into Excel or Google Sheets for presentation layouts.'
    ]
  }
};
