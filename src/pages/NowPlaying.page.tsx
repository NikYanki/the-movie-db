import React, {FC, useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import {nowPlayingMoviesActions} from "../redux/slices";
import {AppPagination, Loader, Movies} from "../components";
import {useAppDispatch, useAppSelector} from "../hooks";


const NowPlayingPage: FC = () => {

    const dispatch = useAppDispatch();
    const {nowPlayingMovies, loading, page, total_pages} = useAppSelector(state => state.nowPlayingMoviesReducer);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {

        const page = searchParams.get('page');
        dispatch(nowPlayingMoviesActions.getAll(currentPage));
    }, [dispatch, searchParams, page, currentPage]);

    return (
        <div>
            {loading && <Loader/>}
            <Movies movies={nowPlayingMovies}/>
            <AppPagination total_pages={total_pages}
                           setCurrentPage={setCurrentPage}/>
        </div>
    );
};

export {NowPlayingPage};