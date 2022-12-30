const initialState = {
  Anime: [],
  loading: false,
  error: null,
};

export const AnimeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ANIME":
      return { ...state, loading: true };
    case "FETCH_ANIME_SUCCESS":
      return { ...state, Anime: action.payload, loading: false };
    case "FETCH_ANIME_ERROR":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
