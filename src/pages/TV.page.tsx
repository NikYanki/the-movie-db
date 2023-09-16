import React, {FC, useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import {tvActions} from "../redux/slices";
import {useAppDispatch, useAppSelector} from "../hooks";
import {AppPagination, Loader, Movies} from "../components";


const TvPage: FC = () => {

    const dispatch = useAppDispatch();
    const {tv, loading, page, total_pages} = useAppSelector(state => state.tvReducer);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {

        const page = searchParams.get('page');
        dispatch(tvActions.getAll(currentPage));
    }, [dispatch, searchParams, page, currentPage]);

    return (
        <div>
            {loading && <Loader/>}
            <Movies movies={tv}/>
            <AppPagination total_pages={total_pages}
                           setCurrentPage={setCurrentPage}/>
        </div>
    );
};

export {TvPage};