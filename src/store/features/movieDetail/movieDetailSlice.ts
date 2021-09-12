import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import FlixGoAPI from "../../../api";
import {IMovieDetail} from "../../../types/movie";
import {IComment} from "../../../types/comment";

export const getMovieDetails = createAsyncThunk(
  'movieDetail/getMovieDetails',
  async (id: number) => {
    const response = new FlixGoAPI().getMovieDetails(id);
    return await response;
  }
)

export const setMovieComments = createAsyncThunk(
  'movies/setMovieComments',
  async (movieId: number) => {
    const response = new FlixGoAPI().getMovieComments(movieId);
    return await response;
  }
)

interface movieDetailState {
  movie: IMovieDetail;
  status: null | string;
  error: null | boolean;
  movieComments: IComment[];
}

const initialState: movieDetailState = {
  movie: { title: "", year: 0, large_cover_image: "", rating: 0, description_full: "", genres: []},
  status: null,
  error: null,
  movieComments: []
};

export const movieDetailSlice = createSlice({
  name: 'movieDetail',
  initialState,
  reducers: {
    addComment: (state, {payload}) => {
      state.movieComments.push(payload);
    }
  },
  extraReducers: (builder => {
    // getMovieDetails
    builder.addCase(getMovieDetails.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getMovieDetails.fulfilled, (state, {payload}) => {
      state.status = 'resolved';
      state.movie = payload.movie;
    });
    builder.addCase(getMovieDetails.rejected, (state, {payload}) => {
      state.status = 'rejected';
    });
    // setMovieComments
    builder.addCase(setMovieComments.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(setMovieComments.fulfilled, (state, {payload}) => {
      state.status = "resolved";
      state.movieComments = payload ? payload : [];
    });
    builder.addCase(setMovieComments.rejected, (state) => {
      state.status = "rejected";
      state.error = true;
      state.movieComments = [];
      alert("Request error...");
    });
  })
})

export const {addComment} = movieDetailSlice.actions;
export default movieDetailSlice.reducer;