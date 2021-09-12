import './Footer.scss';
import {FC} from "react";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__text">
            Movie app for pet-project : Copyright 2021 by Oleksiy Nikolaenko
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;