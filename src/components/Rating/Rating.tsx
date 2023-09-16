import React, {FC} from 'react';
import StarRatings from "react-star-ratings";
import {IPropsRating} from "../../interfaces";


const Rating: FC<IPropsRating> = ({grade}) => {
    const color = ['#f3d661', '#100f0f', '#797576'];

    return (
        <div>
            <StarRatings numberOfStars={5}
                         rating={grade}
                         starHoverColor={color[1]}
                         starRatedColor={color[0]}
                         starEmptyColor={color[2]}
                         starDimension={"25px"}
                         starSpacing={"2px"}/>
        </div>
    );
};

export {Rating};