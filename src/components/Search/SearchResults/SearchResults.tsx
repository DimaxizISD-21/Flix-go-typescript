import {FC} from "react";
import {SearchResultsProps} from "../../../types/search";
import SearchResultItem from "./SearchResultItem";

import "./SearchResults.scss";

const SearchResults: FC<SearchResultsProps> = ({results, toogleShowResults, inputRef}) => {
  return (
    <div className="search__results" onMouseDown={(e) => e.preventDefault()}>
      {results?.length === 0 ? (
        <div className="search__results__info">No results ...</div>
      ) : (
        results?.map((item) => (
          <SearchResultItem
            key={item.id}
            id={item.id}
            img={item.large_cover_image}
            title={item.title}
            year={item.year}
            toogleShowResults={toogleShowResults}
            inputRef={inputRef}
          />
        ))
      )}
    </div>
  );
};

export default SearchResults;