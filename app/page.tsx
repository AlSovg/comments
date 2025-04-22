"use client"
import {CommentList} from "@/components/custom/CommentList/CommentList";
import {CommentInput} from "@/components/custom/CommentInput/CommentInput";
import {useComments} from "@/hooks/useComments";

export default function Home() {
    const commentHook = useComments()
    return (
        <div className={"form"}>
            <CommentInput
                className={"container"}
                addComment={commentHook.addComment}
            />
            <CommentList
                className={"commentList"}
                comments={commentHook.comments}
                deleteComment={commentHook.removeComment}
                toggleLike={commentHook.toggleLike}
            />
        </div>
    );
}
