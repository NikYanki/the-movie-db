import React, {FC, SetStateAction} from 'react';
import {Pagination} from "@mui/material";

import styles from "./AppPagination.module.css";

import {IPropsPagination} from "../../interfaces";

const AppPagination: FC<IPropsPagination> = ({total_pages, setCurrentPage}) => {
    const handleChange = (page: number) => {
        setCurrentPage(page);
        window.scroll(0, 0);
    };

    return (
        <div className={styles.paginationContainer}>
            <Pagination onChange={(event, value) => setCurrentPage(value)}
                        variant={"outlined"}
                        count={total_pages}
                        color={"primary"}
                        size={"large"}

            />

        </div>
    );
};

export {AppPagination};