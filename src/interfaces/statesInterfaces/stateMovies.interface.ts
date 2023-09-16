import {IMovie} from "../componentInterfaces/movie.interface";

export interface IState {
    movies: IMovie[],
    page: number,
    total_pages: number,
    errors: any,
    loading: boolean
}