import {createSlice} from "@reduxjs/toolkit";

interface movieBookmarkInitialState {
  bookmarkCount: number;
  moviesList: any[];
}

const initialState: movieBookmarkInitialState = {
  bookmarkCount: 0,
  moviesList: []
};

export const movieBookmarkSlice = createSlice({
  name: "movieBookmark",
  initialState,
  reducers: {
    addBookmark: (state, {payload}) => {
      state.bookmarkCount += 1;
      state.moviesList.push(payload);
      localStorage.setItem('bookmarkCount', `${state.bookmarkCount}`);
    },
    removeBookmark: (state, {payload}) => {
      state.bookmarkCount === 0 ? state.bookmarkCount = 0 : state.bookmarkCount -= 1;
      state.moviesList.splice(state.moviesList.findIndex(movie => movie.id === payload), 1);
      localStorage.setItem('bookmarkCount', `${state.bookmarkCount}`);
    }
  }
});

export const {addBookmark, removeBookmark} = movieBookmarkSlice.actions;
export default movieBookmarkSlice.reducer;