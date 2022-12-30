import { useNavigate } from "react-router-dom";
import AnimeCard from "./AnimeCard";

const AnimeCardList = (props) => {
  //   const [inputInfo, setInputInfo] = useState();
  const navigate = useNavigate();

  const FullAnimeInfo = (animeId) => {
    console.log(animeId);
    console.log("animeId");
    navigate(`/anime-info/${animeId}`, {
      state: { search: animeId },
    });
  };
  return (
    <div class="anime-card-list-box">
      {props.animes.map((anime) => (
        <AnimeCard
          anime={anime}
          key={anime.mal_id}
          ShowFullAnimeInfo={FullAnimeInfo(anime.mal_id)}
        ></AnimeCard>
      ))}
    </div>
  );
};

export default AnimeCardList;
