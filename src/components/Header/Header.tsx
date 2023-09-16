import React, {FC, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDoorOpen} from "@fortawesome/free-solid-svg-icons/faDoorOpen";
import {faUser} from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.css";

import {genresActions} from "../../redux/slices";
import {ThemeToggle, Genres, MovieSearch} from "../";
import {useAppDispatch, useAppSelector} from "../../hooks";

const Header: FC = () => {

    const dispatch = useAppDispatch();
    const {genres, loading,} = useAppSelector(state => state.genresReducer);

    useEffect(() => {
        dispatch(genresActions.getAll());
    }, [dispatch]);

    const navigate = useNavigate();
    const themes = ["blackTheme", "darkNightTheme", "darkRichTheme", "lightTheme", "redTheme", "snowTheme"];
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div>
            <div className={styles.headerContainer}>
                <div id={styles.headerContainer}>
                    <div id={styles.divMainLogo}/>
                    <div id={styles.functional}>
                        <MovieSearch/>
                        <ThemeToggle actions={themes}/>
                        <div className={styles.functionButtons}>

                            <button onClick={() => {
                                navigate("/home")
                            }}>Home<FontAwesomeIcon icon={faDoorOpen}/>
                            </button>
                            <button onClick={() => {
                                navigate("/myProfile")
                            }}>Profile<FontAwesomeIcon icon={faUser}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.movieBar}
                 onMouseEnter={handleMouseEnter}>
                <button onClick={() => {
                    navigate("/movie")
                }}>Movie
                </button>
                <button onClick={() => {
                    navigate("/tv")
                }}>TV
                </button>
                <button onClick={() => {
                    navigate("/nowPlaying")
                }}>Now Playing
                </button>
                <button onClick={() => {
                    navigate("/popular")
                }}>Popular
                </button>
                <button onClick={() => {
                    navigate("/topRated")
                }}>Top Rated
                </button>
                <button onClick={() => {
                    navigate("/upcoming")
                }}>Upcoming
                </button>
            </div>
            <div onMouseLeave={handleMouseLeave}>
                {isHovered && <Genres genres={genres}/>}
            </div>

        </div>
    );
};

export {Header};