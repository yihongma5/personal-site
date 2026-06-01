import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    desc: z.string().optional(),
    hidden: z.boolean().optional(),
  }),
});

export const collections = { blog };
