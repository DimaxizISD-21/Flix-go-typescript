import {FC, useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {useTypedDispatch} from "../../hooks/useTypedDispatch";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Comments from "../Comments/Comments";
import Img from "../UI/Img/Img";
import Preloader from "../UI/Preloader/Preloader";
import star from "../../assets/icons/star.svg";
import bookmarkUnActive from "../../assets/icons/bookmark__detail.svg";
import bookmarkActive from "../../assets/icons/bookmark.svg";
import {getMovieDetails} from "../../store/features/movieDetail/movieDetailSlice";
import {addBookmark, removeBookmark} from "../../store/features/movieBookmark/movieBookmarkSlice";
import {checkListItemById} from "../../utils";
import {IMovieId} from "../../types/movie";

import './MovieDetail.scss';

const MovieDetail: FC = () => {

  const {movieId} = useParams<IMovieId>();
  const dispatch = useTypedDispatch();
  const {status, movie, movieComments} = useTypedSelector(state => state.movieDetail);
  const {moviesList} = useTypedSelector(state => state.movieBookmark);
  const [activeBtn, setActiveBtn] = useState(checkListItemById(moviesList, +movieId));

  const handleBtnActive = () => {
    if (!activeBtn) {
      setActiveBtn(true);
      dispatch(addBookmark({
        id: +movieId,
        img: movie.large_cover_image,
        title: movie.title,
        year: movie.year,
        rating: movie.rating,
        description: movie.description_full
      }));
    } else {
      setActiveBtn(false);
      dispatch(removeBookmark(movieId));
    }
  };

  useEffect(() => {
    dispatch(getMovieDetails(+movieId));
  }, [dispatch, movieId]);

  return (
    <>
      {
        status === 'loading' || movie === null ? <Preloader/> :
          (
            <main className="movie__detail">
              <div className="container">
                <div className="movie__detail__inner">
                  <div className="movie__detail__left">
                    <Img className="movie__detail__img" srcImg={movie.large_cover_image} alt={movie.title}/>
                  </div>
                  <div className="movie__detail__right">
                    <div className="movie__detail__info">
                      <div className="movie__detail__title__inner">
                        <div className="movie__detail__title">{movie.title}</div>
                        <div className="movie__detail__bookmark" onClick={() => handleBtnActive()}>
                          <img src={activeBtn ? bookmarkActive : bookmarkUnActive} alt="bookmark__detail"/>
                        </div>
                      </div>
                      <div className="movie__detail__subtitle">
                        <div className="movie__detail__year">{movie.year}</div>
                        <div className="movie__detail__rating">{movie.rating}<img src={star} alt="star"/></div>
                      </div>
                      <div className="movie__detail__genres">
                        {
                          movie.genres.map((genre, i) => (
                            <div key={i} className="movie__detail__genre">{genre}</div>
                          ))
                        }
                      </div>
                      <div className="movie__detail__descr">
                        {movie.description_full ? movie.description_full : 'No description ...'}
                      </div>
                    </div>
                    <Comments comments={movieComments}/>
                  </div>
                </div>
              </div>
            </main>
          )
      }
    </>
  );
};

export default MovieDetail;