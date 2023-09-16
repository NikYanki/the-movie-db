
import {IMovie} from "../componentInterfaces/movie.interface";

export interface IStateUpcomingMovies {
    upcomingMovies: IMovie[],
    page: number,
    total_pages: number,
    errors: any,
    loading: boolean
}