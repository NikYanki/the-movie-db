import React, {FC, useState} from 'react';

import style from "./ThemeToggle.module.css";

import {IThemeToggleProps} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {changeTheme} from "../../redux/slices";

const ThemeToggle: FC<IThemeToggleProps> = ({actions}) => {

    const [activeActionIndex, setActiveActionIndex] = useState(0);
    const {
        blackTheme,
        darkNightTheme,
        darkRichTheme,
        lightTheme,
        redTheme,
        snowTheme
    } = useAppSelector(state => state.themeReducer);

    const dispatch = useAppDispatch();

    const handleSlide = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newIndex = parseInt(event.target.value, 10);
        setActiveActionIndex(newIndex);
        dispatch(changeTheme(newIndex));
    };

    return (
        <div className={style.toggle}>
            <label htmlFor="actionRange"/>
            <input
                type="range"
                min={0}
                max={actions.length - 1}
                value={activeActionIndex}
                onChange={handleSlide}
            />
        </div>
    );
};
export {ThemeToggle};