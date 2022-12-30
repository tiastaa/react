import { useEffect } from "react";
import { useSelector } from "react-redux";
import AnimeCardList from "../../components/AnimeCardList";
import { useActions } from "../../hooks/UseActions";

const Home = () => {
  const { fetchTopAnime } = useActions();
  const { topAnimes, loading, error } = useSelector((state) => state.topAnime);
  useEffect(() => {
    fetchTopAnime();
  }, []);
  console.log(topAnimes, loading, error);
  console.log("[eq");
  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <AnimeCardList animes={topAnimes}></AnimeCardList>
      )}
    </div>
  );
};

export default Home;
