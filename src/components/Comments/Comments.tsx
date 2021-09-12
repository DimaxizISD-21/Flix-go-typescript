import {KeyboardEvent, ChangeEvent, FC, useState} from "react";
import {useTypedDispatch} from "../../hooks/useTypedDispatch";
import {useParams} from "react-router-dom";
import {addComment} from "../../store/features/movieDetail/movieDetailSlice";
import Comment from "./Comment/Comment";
import {CommentsProps} from "../../types/comment";
import {IMovieId} from "../../types/movie";

import './Comments.scss';

const Comments: FC<CommentsProps> = ({comments}) => {

  const dispatch = useTypedDispatch();
  const {movieId} = useParams<IMovieId>();
  const [commentValue, setCommentValue] = useState("");

  const handleChangeCommentValue = (e: ChangeEvent<HTMLInputElement>) => {
    setCommentValue(e.target.value);
  };

  const handleAddComment = () => {
    const newComment = {
      id: new Date().getTime(),
      movieId: +movieId,
      author: 'You',
      date: new Date().toISOString().slice(0, 10),
      msg: commentValue
    };

    if (commentValue !== "") {
      dispatch(addComment(newComment));
      setCommentValue("");
    }
  };

  const handleKeyEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddComment();
    }
  }

  const filteredCommentsByMovieId = comments.filter(comment => comment.movieId === +movieId);

  return (
    <div className="comments">
      <div className="comments__title">Comments</div>
      <div className="comments__inner">
        <div className="comments__body">
          {
            filteredCommentsByMovieId.length === 0 ?
              (<div className="comments__no__comments">No comments</div>) :
              filteredCommentsByMovieId.map(comment => (
                <Comment
                  key={comment.id}
                  author={comment.author}
                  date={comment.date}
                  msg={comment.msg}
                />
              ))
          }
        </div>
        <div className="comment__input__inner">
          <input
            className="comment__input"
            type="text"
            value={commentValue}
            placeholder="Write your comment"
            onChange={handleChangeCommentValue}
            onKeyPress={(e) => handleKeyEnter(e)}
          />
          <button className="comment__btn" onClick={handleAddComment}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Comments;