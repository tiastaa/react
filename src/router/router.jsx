import Home from "../pages/Home/index.jsx";
import AnimeInfo from "../pages/AnimeInfo/index.jsx";
import Favourite from "../pages/Favourite/index.jsx";
import Search from "../pages/Search/index.jsx";
import RandomAnime from "../pages/RandomAnime/index.jsx";
import { createBrowserRouter } from "react-router-dom";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/anime-info/:name",
    element: <AnimeInfo />,
  },
  {
    path: "/favourite",
    element: <Favourite />,
  },
  {
    path: "/search-results/:name",
    element: <Search />,
  },
  {
    path: "/random/:name",
    element: <RandomAnime />,
  },
]);

export default router;
