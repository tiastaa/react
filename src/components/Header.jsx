import { NavLink } from "react-router-dom";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const inputInfo = useRef();
  const navigate = useNavigate();
  const showSearchAnime = () => {
    navigate(`/search-results/${inputInfo}`, {
      state: { search: inputInfo },
    });
  };
  return (
    <div class="header-box">
      <div class="header-panel-box">
        <div class="logo-box"></div>
        <NavLink to="/random/1">Random Anime</NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/favourite">Favourite</NavLink>

        <div>
          <input
            type="search"
            class="my-search-input"
            placeholder="Search anime"
            ref={inputInfo}
          />
        </div>
        <button onClick={showSearchAnime}>Search</button>
      </div>

      <h1 class="header-title">MY ANIME</h1>
    </div>
  );
};

export default Header;
