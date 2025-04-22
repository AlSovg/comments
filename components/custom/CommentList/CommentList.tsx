import React from 'react';
import {cn} from "@/lib/utils";
import {Comment} from "@/models/comment";
import {CommentCard} from "@/components/custom/Comment/Comment";

interface Props {
    className?: string;
    comments: Comment[];
    deleteComment: (id : number) => void;
    toggleLike: (id : number) => void;
}

export const CommentList: React.FC<Props> = ({className, comments, deleteComment, toggleLike}) => {
    return (
        <div className={cn(className, "flex flex-col overflow-y-auto gap-1")}>
            {comments.map(
                (comment: Comment, index) =>
                    (<CommentCard
                        key={index}
                        comment={comment}
                        deleteComment={deleteComment}
                        toggleLike={toggleLike}
                    />)
            )}
        </div>
    );
};

