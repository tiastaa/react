import * as SearchAnimeActionCreators from "./searchAnime";
import * as TopAnimeActionCreators from "./topAnime";
import * as RandomAnimeActionCreators from "./randomAnime";
import * as AnimeActionCreators from "./Anime";
export const ActionCreators = {
  ...SearchAnimeActionCreators,
  ...TopAnimeActionCreators,
  ...RandomAnimeActionCreators,
  ...AnimeActionCreators,
};
