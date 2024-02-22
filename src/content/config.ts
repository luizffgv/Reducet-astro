import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().describe("Title of the post."),
    summary: z.string().max(200).describe("Short summary of the post."),
    date: z.date().describe("Date the post was finished in."),
    tags: z.array(z.string()).describe("Tags the post is marked with."),
  }),
});

export const collections = {
  posts: postsCollection,
};
