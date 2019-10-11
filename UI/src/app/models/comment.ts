export class Comment {
    constructor(
        public id:number,
        public content:string,
        public author:string,
        public pubDate:Date,
        public postID:number
    ){


    }
}
