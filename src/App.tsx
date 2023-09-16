import React, {FC} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {Layout} from "./layout";
import {
    HomePage,
    MovieDetailsPage,
    MoviePage,
    MoviesByGenresPage,
    MyProfilePage,
    NotFoundPage,
    NowPlayingPage,
    PopularPage,
    TopRatedPage,
    TvPage,
    UpcomingPage
} from "./pages";

const App: FC = () => {

    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
                <Route path={'myProfile'} element={<MyProfilePage/>}/>
                <Route path={'movie'} element={<MoviePage/>}/>
                <Route path={'tv'} element={<TvPage/>}/>
                <Route path={'nowPlaying'} element={<NowPlayingPage/>}/>
                <Route path={'popular'} element={<PopularPage/>}/>
                <Route path={'topRated'} element={<TopRatedPage/>}/>
                <Route path={'upcoming'} element={<UpcomingPage/>}/>
                <Route path={'movies/:id'} element={<MovieDetailsPage/>}/>
                <Route path={':name/:id'} element={<MoviesByGenresPage/>}/>
            </Route>
        </Routes>
    );
};

export {App};