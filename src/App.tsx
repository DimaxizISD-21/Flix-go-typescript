import {FC} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import AppRouter from "./components/AppRouter/AppRouter";
import Header from "./components/UI/Header/Header";
import Footer from "./components/UI/Footer/Footer";

import './assets/css/App.scss';

const App: FC = () => {
  return (
    <Router>
      <Header/>
      <AppRouter/>
      <Footer/>
    </Router>
  );
};

export default App;