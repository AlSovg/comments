import z from "zod"

export const CommentSchema = z.object({
    name: z.string().min(1, "Имя обязательно"),
    text: z.string().min(1, "Комментарий не может быть пустым"),
    isLiked: z.boolean()
});

export type TCommentValues = z.infer<typeof CommentSchema>;