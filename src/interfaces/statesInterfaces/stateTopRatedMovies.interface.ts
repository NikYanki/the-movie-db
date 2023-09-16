import {IMovie} from "../componentInterfaces/movie.interface";

export interface IStateTopRatedMovies {
    topRatedMovies: IMovie[],
    page: number,
    total_pages: number,
    errors: any,
    loading: boolean
}