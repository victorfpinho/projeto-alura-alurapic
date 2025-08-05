export interface Photo {
  id: number;
  postDate:Date;
  url:string;
  description: string;
  sloowComments:boolean;
  likes:number;
  comments:number;
  userId:number;
}
