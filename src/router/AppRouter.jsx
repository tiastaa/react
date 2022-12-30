import { Routes, Route } from "react-router-dom";
import AnimeInfo from "../pages/AnimeInfo";
import Favourite from "../pages/Favourite";
import Home from "../pages/Home";
import RandomAnime from "../pages/RandomAnime";
import SearchAnime from "../pages/SearchAnime";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favourite" element={<Favourite />} />
      <Route path="/search-results/:name" element={<SearchAnime />} />
      <Route path="/anime-info/:name" element={<AnimeInfo />} />
      <Route path="/random/:name" element={<RandomAnime />} />
    </Routes>
  );
};

export default AppRouter;
