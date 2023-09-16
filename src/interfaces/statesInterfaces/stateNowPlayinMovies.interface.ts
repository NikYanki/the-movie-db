import {IMovie} from "../componentInterfaces/movie.interface";

export interface IStateNowPlayingMovies {
    nowPlayingMovies: IMovie[],
    page: number,
    total_pages: number,
    errors: any,
    loading: boolean
}