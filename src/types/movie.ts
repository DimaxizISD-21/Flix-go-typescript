import {ActionCreatorWithPayload} from "@reduxjs/toolkit";

export interface IMovie {
  id: number;
  img: string;
  title: string;
  year: number;
  rating: number;
  description: string;
}

export interface IMovieId {
  movieId: string;
}

export interface IMoviesCard {
  id: number;
  large_cover_image: string;
  title: string;
  year: number;
  rating: number;
}

export interface IMovieCard {
  id: number;
  img: string;
  title: string;
  year: number;
  rating: number;
}

export interface MovieCardsProps {
  movies: IMoviesCard[];
}

export interface MovieFilterProps {
  currentGenre: string;
  setMoviesGenre: ActionCreatorWithPayload<any>;
}

export interface MovieBookmarkItemsProps {
  bookmarks: IMovie[];
}

export interface MovieBookmarkItemProps extends IMovie {}

export interface IMovieDetail {
  large_cover_image: string;
  title: string;
  year: number;
  rating: number;
  description_full: string;
  genres: string[];
}