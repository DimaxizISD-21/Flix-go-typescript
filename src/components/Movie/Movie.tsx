import {FC, useEffect} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useTypedDispatch} from "../../hooks/useTypedDispatch";
import MovieFilter from "./MovieFilter/MovieFilter";
import MovieCards from "./MovieCards/MovieCards";
import Pagination from "../UI/Pagination/Pagination";
import Preloader from "../UI/Preloader/Preloader";
import {
  setMovies,
  setNextPage,
  setPrevPage,
  setCurrentPage,
  setMoviesGenre
} from "../../store/features/movies/moviesSlice";

import './Movie.scss';

const Movie: FC = () => {

    const dispatch = useTypedDispatch();
    const {moviesList, status, pageSize, currentPage, movieCount, genre} = useTypedSelector(state => state.movies);

    useEffect(() => {
      dispatch(setMovies({currentPage, genre, pageSize}));
    }, [dispatch, currentPage, genre, pageSize]);

    return (
      <>
        <MovieFilter currentGenre={genre} setMoviesGenre={setMoviesGenre}/>
        {
          status === 'loading' ? <Preloader/> : moviesList ? (
            <>
              <MovieCards movies={moviesList}/>
              <Pagination
                pageSize={pageSize}
                currentPage={currentPage}
                movieCount={movieCount}
                setCurrentPage={setCurrentPage}
                setNextPage={setNextPage}
                setPrevPage={setPrevPage}
              />
            </>
          ) : <h2 className="movie__error">Movies not found...</h2>
        }
      </>
    );
  }
;

export default Movie;