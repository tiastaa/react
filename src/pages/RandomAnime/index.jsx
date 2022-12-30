import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import AnimeCardList from "../../components/AnimeCardList";
import { useActions } from "../../hooks/UseActions";

const Home = () => {
  // const { fetchRandomAnime } = useActions();
  // const { randomAnimes, loading, error } = useSelector(
  //   (state) => state.randomAnime
  // );
  // useEffect(() => {
  //   fetchRandomAnime();
  // }, []);
  const { state } = useLocation();
  const { search } = state;
  console.log("searchQ");
  console.log(search);
  const { fetchAnime } = useActions();
  const { Anime, loading, error } = useSelector((state) => state.Anime);
  useEffect(() => {
    fetchAnime(search);
  }, []);
  console.log(Anime, loading, error);

  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <AnimeCardList animes={Anime}></AnimeCardList>
      )}
    </div>
  );
};

export default Home;
