import {FC} from "react";
import {Link} from "react-router-dom";
import {SearchResultItemProps} from "../../../types/search";
import Img from "../../UI/Img/Img";

const SearchResultItem: FC<SearchResultItemProps> = ({id, title, img, year, toogleShowResults, inputRef}) => {

  const handleClickItem = () => {
    toogleShowResults();
    inputRef.current.blur();
    inputRef.current.value = "";
  };

  return (
    <Link className="search__results__item" to={`/movie-detail/${id}`} onClick={handleClickItem}>
      <Img className="search__results__item__img" srcImg={img} alt={title}/>
      <div className="search__results__item__title">
        {title} ({year})
      </div>
    </Link>
  );
};

export default SearchResultItem;
