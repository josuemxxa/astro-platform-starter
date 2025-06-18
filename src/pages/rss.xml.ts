import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('blog');

  return rss({
    title: "Josue’s Blog",
    description: "Latest posts on problem solving and strategy",
    site: "https://josue-blog.netlify.app", // your deployed URL
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      link: `/blog/${post.slug}/`,
    })),
  });
}
