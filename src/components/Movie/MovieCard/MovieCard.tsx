import {FC} from "react";
import {Link} from "react-router-dom";
import {IMovieCard} from "../../../types/movie";
import star from "../../../assets/icons/star.svg";
import Img from "../../UI/Img/Img";

import './MovieCard.scss'

const MovieCard: FC<IMovieCard> = ({id, img, title, year, rating}) => {
  return (
    <div className="movie__card">
      <Link className="movie__card__link" to={`/movie-detail/${id}`}>
        <Img className="movie__card__img" srcImg={img} alt={title}/>
      </Link>
      <div className="movie__card__title">{title}</div>
      <div className="movie__card__descr">
        <div className="movie__card__year">{year}</div>
        <div className="movie__card__rating">{rating}<img src={star} alt="star"/></div>
      </div>
    </div>
  );
};

export default MovieCard;
