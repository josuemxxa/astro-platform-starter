import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('blog');

  return rss({
    title: "Josue’s Blog",
    description: "Latest posts on problem solving and strategy",
    site: "https://josue-blog.netlify.app",
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: new Date(post.data.pubDate),
      link: `/blog/${post.slug}/`,
    })),
  });
}
