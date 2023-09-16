import {axiosService, IResponse} from "./axios.service";
import {IMoviesResponse} from "../interfaces";
import {urls} from "../constants";

const topRatedMoviesService = {
    getAll: (page:number):IResponse<IMoviesResponse> => axiosService.get(urls.topRatedMovies,{params:{page}})
};

export {topRatedMoviesService};