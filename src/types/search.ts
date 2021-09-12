import {RefObject} from "react";

export interface SearchResultsProps {
  results: any[];
  toogleShowResults: () => void;
  inputRef: RefObject<HTMLInputElement>;
}

export interface SearchResultItemProps {
  id: number;
  title: string;
  img: string;
  year: number;
  toogleShowResults: () => void;
  inputRef: any;
}