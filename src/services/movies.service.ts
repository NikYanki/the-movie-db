import {axiosService, IResponse} from "./axios.service";
import {urls} from "../constants";
import {IDetailsMovies, IMoviesResponse} from "../interfaces";

const moviesService = {
    getAll: (page: number): IResponse<IMoviesResponse> => axiosService.get(`${urls.allFilms}`, {params: {page}}),
    getById: (id: number): IResponse<IDetailsMovies> => axiosService.get(urls.detailsFilm.concat(`${id}`))
};

export {moviesService};