import {FC} from "react";
import {Link} from "react-router-dom";
import {useTypedDispatch} from "../../../hooks/useTypedDispatch";
import {removeBookmark} from "../../../store/features/movieBookmark/movieBookmarkSlice";
import star from "../../../assets/icons/star.svg";

import './MovieBookmarkItem.scss';
import {MovieBookmarkItemProps} from "../../../types/movie";

const MovieBookmarkItem: FC<MovieBookmarkItemProps> = ({id, img, title, year, rating, description}) => {

  const dispatch = useTypedDispatch();

  return (
    <div className="movie__bookmark__item">
      <Link className="movie__bookmark__link" to={`/movie-detail/${id}`}>
        <img className="movie__bookmark__img" src={img} alt={title}/>
      </Link>
      <div className="movie__bookmark__info">
        <div className="movie__bookmark__title">{title}</div>
        <div className="movie__card__descr">
          <div className="movie__card__year">{year}</div>
          <div className="movie__card__rating">{rating}<img src={star} alt="star"/></div>
        </div>
        <div className="movie__bookmark__text">{description}</div>
      </div>
      <button className="movie__bookmark__btn" onClick={() => dispatch(removeBookmark(id))}>Remove</button>
    </div>
  );
};

export default MovieBookmarkItem;