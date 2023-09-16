import React, {FC} from 'react';
import {HashLoader} from "react-spinners";

import styles from "./Loader.module.css";

const Loader: FC = () => {
    return (

        <div className={styles.LoaderContainer}>
            <HashLoader color="#4caf50"/>
        </div>


    );
};

export {Loader};