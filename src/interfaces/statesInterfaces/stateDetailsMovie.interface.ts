import {IDetailsMovies} from "../componentInterfaces/detailsMovies.interface";
import {IVideo} from "../componentInterfaces/video.interface";
import {IVideoResponse} from "../responceInterfaces/videoResponse.interface";

export interface IStateDetailsMovie {
    video:IVideo[]
    movie: IDetailsMovies | null,
    errors: any,
    loading: boolean
}