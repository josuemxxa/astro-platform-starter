import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.string(),
        author: z.string(),
        tags: z.array(z.string()),
    }),
});

export const collections = {
    blog: blogCollection,
};
