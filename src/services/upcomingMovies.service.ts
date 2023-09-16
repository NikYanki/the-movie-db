import {axiosService, IResponse} from "./axios.service";
import {IMoviesResponse} from "../interfaces";
import {urls} from "../constants";

const upcomingMoviesService = {
    getAll: (page: number): IResponse<IMoviesResponse> => axiosService.get(urls.upcomingMovies, {params: {page}})
};

export {upcomingMoviesService};