import {FC} from "react";
import {useTypedDispatch} from "../../../hooks/useTypedDispatch";
import {capitalizeFirstLetter} from "../../../utils";
import {MovieFilterProps} from "../../../types/movie";

import './MovieFilter.scss';

const MovieFilter: FC<MovieFilterProps> = ({currentGenre, setMoviesGenre}) => {

  const dispatch = useTypedDispatch();
  const genres = ['all', 'thriller', 'drama', 'action', 'crime', 'comedy', 'horror'];

  return (
    <section className="movie__filter">
      <div className="container">
        <div className="movie__filter__inner">
          {
            genres.map((genre, i) => (
              <div key={i} className={currentGenre === genre ? "filter__category__active" : "filter__category"}>
                <span onClick={() => dispatch(setMoviesGenre(genre))}>{`${capitalizeFirstLetter(genre)}`}</span>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default MovieFilter;