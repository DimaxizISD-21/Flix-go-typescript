import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import FlixGoAPI, {IGetMovies} from "../../../api";

interface MoviesSliceState {
  moviesList: any[];
  genre: string;
  status: null | string;
  error: boolean;
  pageSize: number;
  currentPage: number;
  movieCount: number;
  searchResults: any[];
}

const initialState: MoviesSliceState = {
  moviesList: [],
  genre: 'all',
  status: null,
  error: false,
  pageSize: 8,
  currentPage: 1,
  movieCount: 0,
  searchResults: []
}

export const setMovies = createAsyncThunk(
  'movies/setMovies',
  async ({currentPage, genre, pageSize}: IGetMovies) => {
    const response = new FlixGoAPI().getMovies(currentPage, genre, pageSize);
    return await response;
  }
)

export const searchMovies = createAsyncThunk(
  'movies/searchMovies',
  async (query: string) => {
    const response = new FlixGoAPI().searchMovies(query);
    return await response;
  }
)

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setCurrentPage: (state, {payload}) => {
      state.currentPage = payload;
    },
    setNextPage: (state) => {
      state.currentPage += 1;
    },
    setPrevPage: (state) => {
      state.currentPage === 1 ? state.currentPage = 1 : state.currentPage -= 1;
    },
    setMoviesGenre: (state, {payload}) => {
      state.genre = payload;
      state.currentPage = 1;
    },
    cleanResults: (state) => {
      state.searchResults = [];
    }
  },
  extraReducers: (builder => {
    // setMovies
    builder.addCase(setMovies.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(setMovies.fulfilled, (state, {payload}) => {
      state.status = 'resolved';
      state.moviesList = payload.movies;
      state.movieCount = payload.movie_count;
    });
    builder.addCase(setMovies.rejected, (state) => {
      state.status = 'rejected';
      state.error = true;
    });
    // searchMovies
    builder.addCase(searchMovies.fulfilled, (state, {payload}) => {
      state.status = "resolved";
      state.searchResults = payload.movies ? payload.movies : [];
    });
    builder.addCase(searchMovies.rejected, (state) => {
      state.status = "rejected";
      state.error = true;
      state.searchResults = [];
      alert("Request error...");
    });
  })
})

export const {setCurrentPage, setNextPage, setPrevPage, setMoviesGenre, cleanResults} = moviesSlice.actions;
export default moviesSlice.reducer;