import {IMovie} from "../componentInterfaces/movie.interface";

export interface IStateTv {
    tv: IMovie[],
    page: number,
    total_pages: number,
    errors: any,
    loading: boolean
}