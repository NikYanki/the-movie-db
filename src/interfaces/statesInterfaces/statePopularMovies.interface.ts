import {IMovie} from "../componentInterfaces/movie.interface";

export interface IStatePopularMovies{
    popularMovies: IMovie[],
    page: number,
    total_pages: number,
    errors: any,
    loading: boolean
}