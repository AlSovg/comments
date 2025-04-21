import {useCommentStore} from "@/stores/commentStore";
import React from "react";

export const useComments = () => {
    const { addComment, comments, loadComments, toggleLike } = useCommentStore();
    React.useEffect(() => {
        loadComments();
    }, [loadComments]);

    return {
        comments,
        addComment,
        toggleLike,
    };
};
