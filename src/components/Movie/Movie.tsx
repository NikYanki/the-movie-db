import React, {FC} from 'react';
import {Link} from "react-router-dom";

import styles from "./Movie.module.css";

import {Rating} from "../";
import {IMovie, IPropsMovie} from "../../interfaces";


const Movie: FC<IPropsMovie> = ({movie}) => {

    const {original_title, poster_path, title, vote_average} = movie;

    return (
        <div className={styles.movieCardContainer}
             style={{
                 backgroundImage: "url('https://image.tmdb.org/t/p/w780/" + poster_path + "')",
             }}>
            <div id={styles.cardInfo}>
                <Link className={styles.link} to={`/movies/${movie.id}`}>{title}</Link>
                <Rating grade={vote_average / 2}/>
            </div>


        </div>
    )
};

export {Movie};