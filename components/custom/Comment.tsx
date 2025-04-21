import React from 'react';
import {Comment} from '@/models/comment';
import {Button} from "@/components/ui/button";
import {Heart, Trash} from "lucide-react";
import {useComments} from "@/hooks/useComments";
import {cn, formatCommentDate} from "@/lib/utils";

interface Props {
    className?: string;
    comment: Comment;
}

export const CommentCard: React.FC<Props> = ({ className, comment }) => {
    const { toggleLike, removeComment } = useComments();

    const handleLikeClick = () => {
        toggleLike(comment.id);
    };

    const handleTrashClick = () => {
        removeComment(comment.id);
    }

    return (
        <div className={cn(className, "comment")}>
            <div className="comment__content">
                <h1 className="comment__author">{comment.name}</h1>
                <p className="comment__text">{comment.text}</p>
                <p className="comment__date">{formatCommentDate(new Date(comment.createdAt))}</p>
            </div>
            <div className={"comment__buttons"}>
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
