import {axiosService, IResponse} from "./axios.service";
import {IMoviesResponse} from "../interfaces";
import {urls} from "../constants";

const nowPlayingMoviesService = {
    getAll: (page: number):IResponse<IMoviesResponse> => axiosService.get(urls.nowPlayingMovies, {params: {page}})
};

export {nowPlayingMoviesService};