import Movie from "../components/Movie/Movie";
import MovieDetail from "../components/MovieDetail/MovieDetail";
import MovieBookmark from "../components/MovieBookmark/MovieBookmark";

export const appRoutes = [
  {path: "/", component: Movie, exact: true},
  {path: "/movie-detail/:movieId", component: MovieDetail, exact: true},
  {path: "/movie-bookmark", component: MovieBookmark, exact: true},
];