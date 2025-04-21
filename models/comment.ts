export class Comment {
    id: number;
    text: string;
    isLiked: boolean;
    createdAt: string;

    constructor(text: string, isLiked: boolean = false) {
        this.id = Date.now();
        this.text = text;
        this.isLiked = isLiked;
        this.createdAt = new Date().toISOString();
    }
}