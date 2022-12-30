const AnimeCard = (props) => {
  return (
    <div class="anime-card-box" onClick={props.ShowFullAnimeInfo}>
      <div class="anime-card-img">{/* <img :src="props." alt="" /> */}</div>
      <div class="anime-card-title">{props.anime.title}</div>
      <div class="anime-card-additional-info-box">
        {/* <div class="anime-card-episodes">{ props.anime.episodes } ep</div>
      <div class="anime-card-score">
        { props.anime.score }
      </div> */}
      </div>
    </div>
  );
};

export default AnimeCard;
