import {FC} from "react";
import MovieBookmarkItem from "../MovieBookmarkItem/MovieBookmarkItem";
import {MovieBookmarkItemsProps} from "../../../types/movie";

const MovieBookmarkItems: FC<MovieBookmarkItemsProps> = ({bookmarks}) => {
  return (
    <div className="movie__bookmark__items">
      {
        bookmarks.map(bookmark => (
          <MovieBookmarkItem
            key={bookmark.id}
            id={bookmark.id}
            title={bookmark.title}
            img={bookmark.img}
            year={bookmark.year}
            rating={bookmark.rating}
            description={bookmark.description}/>
        ))
      }
    </div>
  );
};

export default MovieBookmarkItems;