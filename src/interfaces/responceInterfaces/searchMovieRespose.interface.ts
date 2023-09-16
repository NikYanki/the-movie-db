import {ISearchMovie} from "../componentInterfaces/searchMovie.interface";

export interface ISearchResponse {
    page: number,
    results: ISearchMovie[]
}