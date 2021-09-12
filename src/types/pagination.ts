import {ActionCreatorWithPayload} from "@reduxjs/toolkit";

export interface PaginationProps {
  currentPage: number;
  pageSize: number;
  movieCount: number;
  setCurrentPage: ActionCreatorWithPayload<any>;
  setNextPage: ActionCreatorWithPayload<void>;
  setPrevPage: ActionCreatorWithPayload<void>;
}