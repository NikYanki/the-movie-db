import React, {FC} from "react";
import Slider from "react-slick";
import {Link} from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MovieCarousel.css";
import styles from "../Movie/Movie.module.css";

import {IMoviesProps} from "../../interfaces";


const MovieCarousel: FC<IMoviesProps> = ({movies}) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 10,
    };

    return (
        <Slider {...settings}>
            {movies.map((movie) => (
                <div key={movie.id}>
                    <img
                        className="movie-poster"
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={movie.title}
                    />
                    <Link className={styles.link} to={`/movies/${movie.id}`}>{movie.title}</Link>
                </div>
            ))}
        </Slider>
    );
};

export {MovieCarousel};