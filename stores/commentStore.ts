import { create } from "zustand";
import { Comment } from "@/models/comment";

interface CommentStore {
    comments: Comment[];
    addComment: (text: string, isLiked?: boolean, name? : string) => Comment;
    toggleLike: (id: number) => void;
    removeComment: (id: number) => void;
    loadComments: () => void;
}

export const useCommentStore = create<CommentStore>((set) => ({
    comments: [],

    loadComments: () => {
        const stored = localStorage.getItem("comments");
        if (stored) set({ comments: JSON.parse(stored) });
    },

    addComment: (text, isLiked = false, name = "Аноним") => {
        const newComment = new Comment(text, isLiked, name);
        set((state) => {
            const updatedComments = [...state.comments, newComment];
            localStorage.setItem("comments", JSON.stringify(updatedComments));
            return { comments: updatedComments };
        });
        return newComment;
    },


    removeComment: (id: number) => {
        set((state) => {
            const updatedComments = state.comments.filter(comment =>
                comment.id != id
            );
            localStorage.setItem("comments", JSON.stringify(updatedComments));
            return { comments: updatedComments };
        });
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