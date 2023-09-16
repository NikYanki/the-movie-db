import {axiosService, IResponse} from "./axios.service";
import {urls} from "../constants";
import {IVideoResponse, IDetailsMovies} from "../interfaces";

const detailsFilmService = {
    getMovie: (id: string): IResponse<IDetailsMovies> => axiosService.get(urls.detailsFilm + id),
    getVideo: (id: string): IResponse<IVideoResponse> => axiosService.get(urls.detailsFilm + id + "/videos")
};

export {detailsFilmService};