import {IMovie} from "../componentInterfaces/movie.interface";
import {ISearchMovie} from "../componentInterfaces/searchMovie.interface";

export interface IStateSearch{
    movies: ISearchMovie[],
    errors: any,
    loading: boolean
}