import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useActions } from "../hooks/UseActions";
import { useSelector } from "react-redux";

const Header = () => {
  const [inputInfo, setInputInfo] = useState();
  const navigate = useNavigate();
  const showSearchAnime = () => {
    console.log(inputInfo);
    console.log("inputInfo");
    navigate(`/search-results/${inputInfo}`, {
      state: { search: inputInfo },
    });
  };
  const ShowRandomAnime = () => {
    const { fetchRandomAnime } = useActions();
    const { randomAnimes, loading, error } = useSelector(
      (state) => state.randomAnime
    );

    fetchRandomAnime();

    // console.log(randomAnimes.mal_id);
    // console.log("randomAnimes.mal_id");
    navigate(`/random/${randomAnimes.mal_id}`, {
      state: { search: randomAnimes.mal_id },
    });
  };
  return (
    <div class="header-box">
      <div class="header-panel-box">
        <div class="logo-box"></div>
        <button onClick={ShowRandomAnime}>Random Anime</button>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/favourite">Favourite</NavLink>

        <div>
          <input
            type="search"
            placeholder="Search anime"
            onChange={(event) => {
              setInputInfo(event.target.value);
            }}
          />
        </div>
        <button onClick={showSearchAnime}>Search</button>
      </div>

      <h1 class="header-title">MY ANIME</h1>
    </div>
  );
};

export default Header;
