import z from "zod"

export const CommentSchema = z.object({
    text: z.string().min(5, { message: 'Введите корректный комментарий' }),
    isLiked: z.boolean()
});

export type TCommentValues = z.infer<typeof CommentSchema>;