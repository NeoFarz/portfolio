import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()).optional().default([]),
    featured: z.boolean().optional().default(false),
    order: z.number().optional().default(0),
    github: z.string().optional(),
    demo: z.string().optional(),
    date: z.string().optional(),
  }),
});

export const collections = {
  projects,
};
