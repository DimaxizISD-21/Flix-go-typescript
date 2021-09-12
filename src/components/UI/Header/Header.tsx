import {FC} from "react";
import {Link} from "react-router-dom";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import bookmark from '../../../assets/icons/bookmark.svg';
import Search from "../../Search/Search";

import './Header.scss';

const Header:FC = () => {

  const {bookmarkCount} = useTypedSelector(state => state.movieBookmark);

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__left">
            <div className="header__brand">
              <Link to='/'>
                FLIX <span>GO</span>
              </Link>
            </div>
          </div>
          <div className="header__right">
            <Search/>
            <div className="header__bookmark">
              <div className="bookmark__btn">
                <Link to='/movie-bookmark'>
                  <img src={bookmark} alt="bookmark"/>
                </Link>
              </div>
              <span>{bookmarkCount}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;