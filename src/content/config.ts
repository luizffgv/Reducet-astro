import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string().max(200),
    date: z.date(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  posts: postsCollection,
};
