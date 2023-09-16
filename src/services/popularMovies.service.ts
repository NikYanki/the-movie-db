import {axiosService, IResponse} from "./axios.service";
import {IMoviesResponse} from "../interfaces";
import {urls} from "../constants";

const popularMoviesService = {
    getAll: (page:number):IResponse<IMoviesResponse> => axiosService.get(urls.popularMovies, {params:{page}})
};

export {popularMoviesService};