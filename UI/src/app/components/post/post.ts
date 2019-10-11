import { Category } from 'src/app/models/category';
import { Comment } from 'src/app/models/comment';

export class Post {
    constructor(
        public id:number,
        public title:string,
        public content:string,
        public pubDate:Date,
        public lastModified:Date,
        public categoryID:number,
        public comments:Comment[],
    ){}


}
