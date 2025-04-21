export class Comment {
    id: number;
    name: string;
    text: string;
    isLiked: boolean;
    createdAt: Date;

    constructor(text: string, isLiked = false, name: string) {
        this.id = Date.now();
        this.text = text;
        this.name = name;
        this.isLiked = isLiked;
        this.createdAt = new Date();
    }
}
