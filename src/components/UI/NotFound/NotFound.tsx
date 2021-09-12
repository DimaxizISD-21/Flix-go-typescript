import React, {FC} from 'react';
import {useLocation, useHistory} from "react-router-dom";

import "./NotFound.scss";

const NotFound: FC = () => {

  const location = useLocation();
  const history = useHistory();

  return (
    <div className="not__found">
      <h2 className="not__found__title">This page <span>{location.pathname}</span> not found ...</h2>
      <div className="not__found__redirect" onClick={() => history.push('/')}>Go Home</div>
    </div>
  );
};

export default NotFound;