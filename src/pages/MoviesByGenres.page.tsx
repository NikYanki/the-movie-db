import React, {FC, useEffect, useState} from 'react';
import {useParams, useSearchParams} from "react-router-dom";

import {moviesByGenresActions} from "../redux/slices";
import {AppPagination, Loader, Movies} from "../components";
import {useAppDispatch, useAppSelector} from "../hooks";

const MoviesByGenresPage: FC = () => {
    const dispatch = useAppDispatch();
    const {movies, loading, page, total_pages} = useAppSelector(state => state.moviesByGenresReducer);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();
    const {id} = useParams();

    useEffect(() => {
        if (id !== null) {
            dispatch(moviesByGenresActions.getAll({currentPage, id}));
        }

    }, [dispatch, searchParams, page, currentPage, id]);

    return (
        <div>
            {loading && <Loader/>}
            <Movies movies={movies}/>
            <AppPagination total_pages={total_pages}
                           setCurrentPage={setCurrentPage}/>
        </div>
    );
};

export {MoviesByGenresPage};