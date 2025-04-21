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
            name: "",
            isLiked: false,

        },
    });

    const onSubmit = async (values: TCommentValues) => {
        const newComment =  addComment(values.text, values.isLiked, values.name);
        form.reset();
        onCommentAdded?.(newComment);
    };

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className={cn(className, "flex gap-2")}>
            <div className={"flex flex-col flex-1  h-[60px]"}>
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
                {!form.formState.errors.text && (
                    <p className="text-sm text-grey-500 ml-2">
                        Введите что-то
                    </p>
                )}
            </div>

            <div className={"flex flex-col  h-[60px]"}>
                <Input
                    {...form.register("name")}
                    placeholder="Ваше имя"
                    aria-invalid={!!form.formState.errors.name}
                />
                {form.formState.errors.name && (
                    <p className="text-sm text-red-500">
                        {form.formState.errors.name.message}
                    </p>
                )}
                {!form.formState.errors.name && (
                    <p className="text-sm text-grey-500 ml-2">
                        Ваше имя
                    </p>
                )}
            </div>


            <Button type="submit" className="self-center">
                <Plus className="mr-2 h-4 w-4"/>
                Добавить
            </Button>
        </form>
    );
};
