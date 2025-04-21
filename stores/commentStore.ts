import { create } from "zustand";
import { Comment } from "@/models/comment";

interface CommentStore {
    comments: Comment[];
    addComment: (text: string, isLiked?: boolean) => Comment;
    toggleLike: (id: number) => void;
    loadComments: () => void;
}

export const useCommentStore = create<CommentStore>((set) => ({
    comments: [],

    loadComments: () => {
        const stored = localStorage.getItem("comments");
        if (stored) set({ comments: JSON.parse(stored) });
    },

    addComment: (text, isLiked = false) => {
        const newComment = new Comment(text, isLiked);
        set((state) => {
            const updatedComments = [...state.comments, newComment];
            localStorage.setItem("comments", JSON.stringify(updatedComments));
            return { comments: updatedComments };
        });
        return newComment;
    },

    toggleLike: (id: number) => {
        set((state) => {
            const updatedComments = state.comments.map(comment =>
                comment.id === id
                    ? { ...comment, isLiked: !comment.isLiked }
                    : comment
            );
            localStorage.setItem("comments", JSON.stringify(updatedComments));
            return { comments: updatedComments };
        });
    },
}));