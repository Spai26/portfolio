import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    description: z.string().max(160),
    stack:       z.array(z.string()),
    year:        z.number(),
    featured:    z.boolean().default(false),
    draft:       z.boolean().default(false),
    repoUrl:     z.string().url().optional(),
    demoUrl:     z.string().url().optional(),
    image:       z.string().optional(),
    order:       z.number().optional(),
  }),
});

const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    description: z.string().max(160),
    date:        z.date(),
    draft:       z.boolean().default(false),
    tags:        z.array(z.string()).optional(),
  }),
});

export const collections = { projects, writing };