import {FC} from "react";
import {Route, Switch} from "react-router-dom";
import {appRoutes} from "../../router";
import NotFound from "../UI/NotFound/NotFound";

const AppRouter: FC = () => {
  return (
    <Switch>
      {
        appRoutes.map((route, i) => (
          <Route key={i} {...route}/>
        ))
      }
      <Route component={NotFound}/>
    </Switch>
  );
};

export default AppRouter;