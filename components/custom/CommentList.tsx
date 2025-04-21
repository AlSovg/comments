import React from 'react';
import {cn} from "@/lib/utils";
import {Comment} from "@/models/comment";
import {CommentCard} from "@/components/custom/Comment";

interface Props {
    className?: string;
    comments: Comment[];
}

export const CommentList: React.FC<Props> = ({className, comments}) => {
    return (
        <div className={cn(className, "flex flex-col overflow-y-auto gap-1")}>
            {comments.map(
                (comment: Comment, index) =>
                    (<CommentCard key={index} comment={comment}/>)
            )}
        </div>
    );
};

