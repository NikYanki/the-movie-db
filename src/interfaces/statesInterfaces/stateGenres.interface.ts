import {IGenres} from "../componentInterfaces/genre.interface";

export interface IStateGenres {
    genres: IGenres[],
    errors: any,
    loading: boolean
}