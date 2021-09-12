import axios, {AxiosInstance} from "axios";

export interface IGetMovies {
  currentPage: number;
  genre: string;
  pageSize: number;
}

export default class FlixGoAPI {
  private axiosInstance: AxiosInstance = axios.create({
    baseURL: 'https://yts.mx/api/v2',
  })

  getMovies = (page: number, genre: string, limit: number): Promise<any> => {
    return this.axiosInstance
      .get(`/list_movies.json?page=${page}&genre=${genre}&limit=${limit}`)
      .then(res => res.data.data);
  }

  getMovieDetails = (id: number): Promise<any> => {
    return this.axiosInstance.get(`/movie_details.json?movie_id=${id}`)
      .then(res => res.data.data);
  }

  getMovieComments = (id: number): Promise<any> => {
    return this.axiosInstance.get(`/movie_comments.json?movie_id=${id}`)
      .then(res => res.data.data);
  }

  searchMovies = (search_field: string): Promise<any> => {
    return this.axiosInstance.get(`/list_movies.json?query_term=${search_field}`)
      .then(res => res.data.data);
  }
}