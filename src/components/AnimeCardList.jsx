import AnimeCard from "./AnimeCard";

const AnimeCardList = (props) => {
  return (
    <div class="anime-card-list-box">
      <AnimeCard anime={props.anime} key={props.anime.id} />
    </div>
  );
};

export default AnimeCardList;
