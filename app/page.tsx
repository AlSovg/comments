"use client"
import {CommentList} from "@/components/custom/CommentList";
import {CommentInput} from "@/components/custom/CommentInput";
import {useComments} from "@/hooks/useComments";

export default function Home() {
    const {comments} = useComments()
    return (
        <div>
            <CommentInput/>
            <CommentList comments={comments}/>
        </div>
    );
}
