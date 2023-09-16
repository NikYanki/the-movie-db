import React, {FC, useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import {upcomingMoviesActions} from "../redux/slices";
import {useAppDispatch, useAppSelector} from "../hooks";
import {AppPagination, Loader, Movies} from "../components";

const UpcomingPage: FC = () => {

    const dispatch = useAppDispatch();
    const {upcomingMovies, loading, page, total_pages} = useAppSelector(state => state.upcomingMoviesReducer);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {

        const page = searchParams.get('page');
        dispatch(upcomingMoviesActions.getAll(currentPage));
    }, [dispatch, searchParams, page, currentPage]);

    return (
        <div>
            {loading && <Loader/>}
            <Movies movies={upcomingMovies}/>
            <AppPagination total_pages={total_pages}
                           setCurrentPage={setCurrentPage}/>
        </div>
    );
};

export {UpcomingPage};