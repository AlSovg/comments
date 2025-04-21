import {useCommentStore} from "@/stores/commentStore";
import React from "react";

export const useComments = () => {
    const { addComment, comments, loadComments, toggleLike, removeComment } = useCommentStore();



    React.useEffect(() => {
        loadComments();
    }, [loadComments]);

    return {
        comments,
        addComment,
        removeComment,
        toggleLike,
    };
};
