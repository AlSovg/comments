"use client"
import {CommentList} from "@/components/custom/CommentList";
import {CommentInput} from "@/components/custom/CommentInput";
import {useComments} from "@/hooks/useComments";

export default function Home() {
    const {comments} = useComments()
    return (
        <div className={"form"}>
            <CommentInput className={"container"}/>
            <CommentList className={"commentList"} comments={comments}/>
        </div>
    );
}
