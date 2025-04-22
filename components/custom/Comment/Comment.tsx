import React from 'react';
import {Comment} from '@/models/comment';
import {Button} from "@/components/ui/button";
import {Heart, Trash} from "lucide-react";
import {cn, formatCommentDate} from "@/lib/utils";
import styles from "./Comment.module.scss";

interface Props {
    className?: string;
    comment: Comment;
    deleteComment: (id: number) => void;
    toggleLike: (id: number) => void;
}

export const CommentCard: React.FC<Props> = ({ className, comment, deleteComment, toggleLike }) => {

    const handleLikeClick = () => {
        toggleLike(comment.id);
    };

    const handleTrashClick = () => {
        deleteComment(comment.id);
    }

    return (
        <div className={cn(className, styles.comment)}>
            <div className={styles.comment__content}>
                <h1 className={styles.comment__author}>{comment.name}</h1>
                <p className={styles.comment__text}>{comment.text}</p>
                <p className={styles.comment__date}>{formatCommentDate(new Date(comment.createdAt))}</p>
            </div>
            <div className={styles.comment__buttons}>
                <Button onClick={handleLikeClick} variant="ghost" size="icon">
                    <Heart className={comment.isLiked ? "fill-red-500 text-red-500" : "text-gray-500"} />
                </Button>
                <Button onClick={handleTrashClick} variant="ghost" size="icon">
                    <Trash/>
                </Button>
            </div>

        </div>
    );
};
