import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React from "react";
import {CommentSchema, TCommentValues} from "@/schemas/commentSchema";
import styles from "./CommentInput.module.scss"

interface Props {
    className?: string;
    addComment : (text : string, isLiked : boolean, name : string) => void;
}

export const CommentInput: React.FC<Props> = ({ className, addComment }) => {

    const form = useForm<TCommentValues>({
        resolver: zodResolver(CommentSchema),
        defaultValues: {
            text: "",
            name: "",
            isLiked: false,
        },
    });

    const onSubmit = async (values: TCommentValues) => {
        addComment(values.text, values.isLiked, values.name);
        form.reset();
    };

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className={cn(className, styles["comment-form"])}>
            <div className={styles["comment-form__field"]}>
                <Input {...form.register("text")} placeholder="Напишите комментарий..."/>
                {form.formState.errors.text ? (
                    <p className={styles["comment-form__field-error"]}>
                        {form.formState.errors.text.message}
                    </p>
                ) : (
                    <p className={styles["comment-form__field-hint"]}>Введите что-то</p>
                )}
            </div>

            <div className={styles["comment-form__field"]}>
                <Input {...form.register("name")} placeholder="Ваше имя"/>
                {form.formState.errors.name ? (
                    <p className={styles["comment-form__field-error"]}>
                        {form.formState.errors.name.message}
                    </p>
                ) : (
                    <p className={styles["comment-form__field-hint"]}>Ваше имя</p>
                )}
            </div>

            <Button type="submit" className={styles["comment-form__button"]}>
                <Plus className="mr-2 h-4 w-4"/>
                Добавить
            </Button>
        </form>
    );
};
