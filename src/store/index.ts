import {configureStore} from "@reduxjs/toolkit";
import moviesReducer from "./features/movies/moviesSlice";
import movieDetailReducer from "./features/movieDetail/movieDetailSlice";
import movieBookmarkReducer from "./features/movieBookmark/movieBookmarkSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    movieDetail: movieDetailReducer,
    movieBookmark: movieBookmarkReducer
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;