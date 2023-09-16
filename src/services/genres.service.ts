import {axiosService, IResponse} from "./axios.service";
import {urls} from "../constants";
import {IGenresResponse} from "../interfaces";

const genresService = {
    getAll: (): IResponse<IGenresResponse> => axiosService.get(urls.genres)
};

export {genresService};