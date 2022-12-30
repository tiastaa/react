import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import AnimeCardList from "../../components/AnimeCardList";
import { useActions } from "../../hooks/UseActions";

const SearchAnime = () => {
  const { state } = useLocation();
  const { search } = state;
  console.log("searchQ");
  console.log(search);

  const { fetchSearchAnime } = useActions();
  const { searchAnimes, loading, error } = useSelector(
    (state) => state.searchAnime
  );
  useEffect(() => {
    fetchSearchAnime(search);
  }, [search]);
  console.log(searchAnimes);
  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <AnimeCardList animes={searchAnimes}></AnimeCardList>
      )}
    </div>
  );
};

export default SearchAnime;
