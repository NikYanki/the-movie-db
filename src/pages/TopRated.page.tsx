import React, {FC, useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../hooks";
import {topRatedMoviesActions} from "../redux/slices";
import {AppPagination, Loader, Movies} from "../components";

const TopRatedPage: FC = () => {
    const dispatch = useAppDispatch();
    const {topRatedMovies, loading, page, total_pages} = useAppSelector(state => state.topRatedMoviesReducer);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {

        const page = searchParams.get('page');
        dispatch(topRatedMoviesActions.getAll(currentPage));
    }, [dispatch, searchParams, page, currentPage]);

    return (
        <div>
            {loading && <Loader/>}
            <Movies movies={topRatedMovies}/>
            <AppPagination total_pages={total_pages}
                           setCurrentPage={setCurrentPage}/>
        </div>
    );
};

export {TopRatedPage};