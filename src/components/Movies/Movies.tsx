import React, {FC} from "react";

import styles from "./Movies.module.css"

import {Movie} from "../Movie/Movie";
import {IMoviesProps} from "../../interfaces";

const Movies: FC<IMoviesProps> = ({movies}) => {

    return (
        <div className={styles.moviesContainer}>
            {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    )
}
export {Movies};