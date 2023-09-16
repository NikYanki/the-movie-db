import {axiosService, IResponse} from "./axios.service";
import {IMoviesResponse} from "../interfaces";
import {urls} from "../constants";

const moviesByGenresService = {
    getAll: (page: number, id: string | undefined): IResponse<IMoviesResponse> => axiosService.get(urls.allFilms + `?with_genres=${id}&page=${page}`)
}

export {moviesByGenresService};