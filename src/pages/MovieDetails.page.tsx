import React, {FC, useEffect} from 'react';
import {useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../hooks";
import {detailsFilmActions} from "../redux/slices";
import {MovieDetails, VideoComponent} from "../components";

const MovieDetailsPage: FC = () => {
    const {id} = useParams();
    const {movie,video} = useAppSelector(state => state.detailsFilmReducer);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (id != null) {
            dispatch(detailsFilmActions.getAll(id));
            dispatch(detailsFilmActions.getVideo(id));
        }
    }, [id, dispatch]);
    return (
        <div>
            <MovieDetails movie={movie}/>
            <VideoComponent video={video}/>
        </div>
    );
};

export {MovieDetailsPage};