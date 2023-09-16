import React, {FC, useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../hooks";
import {moviesActions} from "../redux/slices";
import {AppPagination, Loader, Movies} from "../components";

const MoviePage: FC = () => {

    const dispatch = useAppDispatch();
    const {movies, loading, page, total_pages} = useAppSelector(state => state.moviesReducer);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {

        const page = searchParams.get('page');
        dispatch(moviesActions.getAll(currentPage));
    }, [dispatch, searchParams, page, currentPage]);

    return (
        <div>
            {loading && <Loader/>}
            <Movies movies={movies}/>
            <AppPagination total_pages={total_pages}
                           setCurrentPage={setCurrentPage}/>
        </div>
    );
};

export {MoviePage};