import {IMovie} from "../componentInterfaces/movie.interface";

export interface IMoviesResponse {
    page: number,
    results: IMovie[]
    total_pages: number
}