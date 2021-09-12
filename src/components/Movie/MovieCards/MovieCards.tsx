import {FC} from "react";
import {MovieCardsProps} from "../../../types/movie";
import MovieCard from "../MovieCard/MovieCard";

import './MovieCards.scss';

const MovieCards: FC<MovieCardsProps> = ({movies}) => {
  return (
    <main className="movie">
      <div className="container">
        <div className="movie__card__inner">
          {
            movies.map(movie => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                img={movie.large_cover_image}
                title={movie.title}
                year={movie.year}
                rating={movie.rating}
              />
            ))
          }
        </div>
      </div>
    </main>
  );
};

export default MovieCards;