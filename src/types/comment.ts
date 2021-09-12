export interface IComment {
  id: number;
  movieId: number;
  author: string;
  date: number;
  msg: string;
}

export interface CommentsProps {
  comments: IComment[];
}

export interface CommentProps {
  author: string;
  date: number;
  msg: string;
}