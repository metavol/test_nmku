import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// お知らせ：src/content/news/YYYY-MM-DD-slug.md を1件1ファイルで追加する
const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['トピックス', '論文', '受賞', '学会', '医局', '診療', '教育']).default('トピックス'),
    // 旧サイトの該当ページ（本文を移行するまでの間のリンク先）
    legacyUrl: z.string().url().optional(),
  }),
});

export const collections = { news };
