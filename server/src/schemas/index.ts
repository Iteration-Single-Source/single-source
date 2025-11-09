import { z } from 'zod';

export const linkSchema = z.object({
  title: z.string().min(1, { error: 'Title is required' }),
  url: z.url({ error: 'Must be a valid URL (e.g., https://...)' }),
});
