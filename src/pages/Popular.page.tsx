import React, {FC, useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../hooks";
import {popularMoviesActions} from "../redux/slices";
import {AppPagination, Loader, Movies} from "../components";

const PopularPage: FC = () => {

    const dispatch = useAppDispatch();
    const {popularMovies, loading, page, total_pages} = useAppSelector(state => state.popularMoviesReducer);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {

        dispatch(popularMoviesActions.getAll(currentPage));
    }, [dispatch, searchParams, page, currentPage]);

    return (
        <div>
            {loading && <Loader/>}
            <Movies movies={popularMovies}/>
            <AppPagination total_pages={total_pages}
                           setCurrentPage={setCurrentPage}/>
        </div>
    );
};

export {PopularPage};