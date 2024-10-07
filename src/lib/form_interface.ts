import { z } from "zod";

export const taskFormat = z.object({
  user_id: z.number().or(z.string().transform((val) => parseInt(val))),
  title: z.string(),
  description: z.string(),
  date: z.date().or(z.string().transform((val) => new Date(val))),
});
