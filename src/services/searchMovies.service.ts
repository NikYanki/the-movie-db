import {axiosService, IResponse} from "./axios.service";
import {ISearchResponse} from "../interfaces";
import {urls} from "../constants";

const searchMoviesService = {
    getAll: (params:string):IResponse<ISearchResponse> => axiosService.get(urls.searchMovies+params)
};

export {searchMoviesService};