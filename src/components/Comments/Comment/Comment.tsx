import {FC} from "react";
import {CommentProps} from "../../../types/comment";

import './Comment.scss';

const Comment: FC<CommentProps> = ({author, date, msg}) => {
  return (
    <div className="comment">
      <div className="comment__info">
        <div className="comment__author">Author: {author}</div>
        <div className="comment__date">Date: {date}</div>
      </div>
      {msg}
    </div>
  );
};

export default Comment;