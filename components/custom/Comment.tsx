import React from 'react';
import {Comment} from '@/models/comment';
import {Button} from "@/components/ui/button";
import {Heart} from "lucide-react";
import {useComments} from "@/hooks/useComments";

interface Props {
    className?: string;
    comment: Comment;
}

export const CommentCard: React.FC<Props> = ({ className, comment }) => {
    const { toggleLike } = useComments();

    const handleLikeClick = () => {
        toggleLike(comment.id);
    };

    return (
        <div className={className}>
            <h1>{comment.text}</h1>
            <Button onClick={handleLikeClick} variant="ghost" size="icon">
                <Heart className={comment.isLiked ? "fill-red-500 text-red-500" : "text-gray-500"} />
            </Button>
        </div>
    );
};
