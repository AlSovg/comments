import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useComments } from "@/hooks/useComments";
import React from "react";
import { Comment } from "@/models/comment";
import {CommentSchema, TCommentValues} from "@/schemas/commentSchema";

interface Props {
    className?: string;
    onCommentAdded?: (comment: Comment) => void;
}

export const CommentInput: React.FC<Props> = ({ className, onCommentAdded }) => {
    const { addComment } = useComments();
    const form = useForm<TCommentValues>({
        resolver: zodResolver(CommentSchema),
        defaultValues: {
            text: "",
            isLiked: false,
        },
    });

    const onSubmit = async (values: TCommentValues) => {
        const newComment =  addComment(values.text, values.isLiked);
        form.reset();
        onCommentAdded?.(newComment);
    };

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className={cn(className, "flex flex-col gap-2")}>
            <Input
                {...form.register("text")}
                placeholder="Напишите комментарий..."
                aria-invalid={!!form.formState.errors.text}
                aria-describedby="comment-error"
            />
            {form.formState.errors.text && (
                <p id="comment-error" className="text-sm text-red-500">
                    {form.formState.errors.text.message}
                </p>
            )}
            <Button type="submit" className="self-end">
                <Plus className="mr-2 h-4 w-4" />
                Добавить
            </Button>
        </form>
    );
};
