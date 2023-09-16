import {axiosService, IResponse} from "./axios.service";
import {urls} from "../constants";
import {IMoviesResponse} from "../interfaces";

const tvService = {
    getAll: (page: number): IResponse<IMoviesResponse> => axiosService.get(`${urls.tv}`, {params: {page}}),
};

export {tvService};