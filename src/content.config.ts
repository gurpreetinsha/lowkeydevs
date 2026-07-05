import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const toolsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.json', base: './src/content/tools' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    keywords: z.array(z.string()),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string()
    })),
    educationalContent: z.object({
      whatIsIt: z.string(),
      howToUse: z.string(),
      proTips: z.array(z.string()).optional()
    })
  })
});

export const collections = {
  tools: toolsCollection
};
