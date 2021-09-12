import {FC} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import MovieBookmarkItems from "./MovieBookmarkItems/MovieBookmarkItems";

import './MovieBookmark.scss';

const MovieBookmark: FC = () => {

  const {moviesList} = useTypedSelector(state => state.movieBookmark);

  return (
    <main className="movie__bookmark">
      <div className="container">
        <div className="movie__bookmark__inner">
          {
            moviesList.length === 0 ? <h2 className="movie__bookmark__notification">No bookmarks ...</h2> :
              <MovieBookmarkItems bookmarks={moviesList}/>
          }
        </div>
      </div>
    </main>
  );
};

export default MovieBookmark;