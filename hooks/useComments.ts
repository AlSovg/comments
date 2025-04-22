import { Comment } from "@/models/comment";
import React from "react";

export const useComments = () => {
    const [comments, setComments] = React.useState<Comment[]>([]);

    const loadComments = () => {
        const stored = localStorage.getItem("comments");
        if (stored) {
            setComments(JSON.parse(stored));
        }
    };

    const updateComments = (updated: Comment[]) => {
        setComments(updated);
        localStorage.setItem("comments", JSON.stringify(updated));
        loadComments()
    };

    const addComment = (text: string, isLiked = false, name = "Аноним") => {
        const newComment = new Comment(text, isLiked, name);
        updateComments([...comments, newComment]);
        return newComment;
    };

    const removeComment = (id: number) => {
        updateComments(comments.filter(comment => comment.id !== id));
    };

    const toggleLike = (id: number) => {
        updateComments(
            comments.map(comment =>
                comment.id === id ? { ...comment, isLiked: !comment.isLiked } : comment
            )
        );
    };

    React.useEffect(() => {
        loadComments();
    }, []);

    return {
        comments,
        addComment,
        removeComment,
        toggleLike,
    };
};
