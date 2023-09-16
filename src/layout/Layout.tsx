import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

import "./Layout.css";

import {useAppSelector} from "../hooks";
import {Header} from "../components";

const Layout: FC = () => {
    const {
        blackTheme,
        darkNightTheme,
        darkRichTheme,
        lightTheme,
        redTheme,
        snowTheme
    } = useAppSelector(state => state.themeReducer);


    return (
        <div className={`layout
           ${blackTheme ?
            "blackTheme" : darkNightTheme ?
                "darkNightTheme" : darkRichTheme ?
                    "darkRichTheme" : redTheme ?
                        "redTheme" : snowTheme ?
                            "snowTheme" : "lightTheme"}`
        }>

            <Header/>
            <Outlet/>
        </div>
    );
};

export {Layout};