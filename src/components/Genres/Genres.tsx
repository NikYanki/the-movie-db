import React, {FC} from "react";
import {Chip} from "@mui/material";
import {useNavigate} from "react-router-dom";

import {IGenresProps} from "../../interfaces";

const Genres: FC<IGenresProps> = ({genres}) => {

    const getRandomColor = () => {
        const colors = ["#FF5733", "#0066ff", "#0cae29", "#0a4cf1", "#B233FF", "#0066ff"];
        return colors[Math.floor(Math.random() * colors.length)];
    };
    const navigate = useNavigate()
    return (
        <div>
            {genres.map((genre) => (
                <Chip key={genre.id}
                      label={genre.name}
                      style={{margin: "4px", backgroundColor: getRandomColor(), color: "#fff"}}
                      onClick={() => {
                          navigate(`/${genre.name}/${genre.id}`)
                      }}
                />
            ))}
        </div>
    );
};

export {Genres};
