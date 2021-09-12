import {useState, useRef, FC} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useTypedDispatch} from "../../hooks/useTypedDispatch";
import {useDebounce} from "../../hooks/useDebounce";
import {cleanResults, searchMovies} from "../../store/features/movies/moviesSlice";
import SearchResults from "./SearchResults/SearchResults";

import './Search.scss';

const Search: FC = () => {

  const [isShowResults, setIsShowResults] = useState(false);
  const {searchResults} = useTypedSelector(state => state.movies);
  const dispatch = useTypedDispatch();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const searchByQuery = () => {
    const currentQuery = inputRef?.current?.value;
    return currentQuery
      ? dispatch(searchMovies(currentQuery))
      : dispatch(cleanResults());
  };

  const debouncedSearch = useDebounce(searchByQuery, 500);

  const toogleShowResults = () => {
    setIsShowResults(!isShowResults);
  };

  return (
    <div className="search">
      <div className="search__inner">
        <input
          ref={inputRef}
          className="search__input"
          type="text"
          placeholder="search"
          onChange={debouncedSearch}
          onClick={() => setIsShowResults(true)}
          onBlur={toogleShowResults}
        />

        {isShowResults && inputRef?.current?.value ? (
          <SearchResults
            results={searchResults}
            toogleShowResults={toogleShowResults}
            inputRef={inputRef}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Search;