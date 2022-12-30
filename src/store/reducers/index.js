import { combineReducers } from "redux";
import { searchAnimeReducer } from "./searchAnimeReducer";
import { topAnimeReducer } from "./topAnimeReducer";
import { randomAnimeReducer } from "./randomAnimeReducer";
import { AnimeReducer } from "./AnimeReducer";

export const rootReducer = combineReducers({
  searchAnime: searchAnimeReducer,
  topAnime: topAnimeReducer,
  randomAnime: randomAnimeReducer,
  Anime: AnimeReducer,
});
