import React, {FC, useEffect} from "react";

import "./MovieDetails.css"

import {Genres, Rating} from "../";
import {IDetailsProps} from "../../interfaces";

const MovieDetails: FC<IDetailsProps> = ({movie}) => {

    return (

        <div>
            {movie &&
                <div className="MovieDetailsContainer">
                    <div className="movieDetailsContainerBg"
                         style={{
                             backgroundImage: `url('https://image.tmdb.org/t/p/w500${movie.backdrop_path}')`,

                         }}></div>
                    <div className="flex">
                        <div className="poster">
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>
                        </div>
                        <div>
                            <div className="releaseDate flexInfo">
                                <div className="bold">release:</div>
                                {movie.release_date.replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`)}
                            </div>
                            <div className="flexInfo">
                                <div className="bold">runtime:</div>
                                {movie.runtime} min
                            </div>
                            <div className="flexInfo">
                                <div className="bold">rating:</div>
                                {<Rating grade={movie.vote_average / 2}/>} {movie.vote_average}
                            </div>
                            <div className="flexInfo">
                                <div className="bold">budget:</div>
                                {movie?.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} $
                            </div>
                            <div className="flexInfo">
                                <div className="bold">revenue:</div>
                                {movie.revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} $
                            </div>
                            <Genres genres={movie.genres}/>
                        </div>
                    </div>
                    <div className="overview">
                        <p>Overview:</p>
                        <div>{movie.overview}</div>
                    </div>
                    <div>

                    </div>
                </div>
            }
        </div>
    );
};

export {MovieDetails};