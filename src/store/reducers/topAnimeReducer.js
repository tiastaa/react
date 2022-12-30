const initialState = {
  topAnimes: [],
  loading: false,
  error: null,
};

export const topAnimeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TOP_ANIME":
      return { ...state, loading: true };
    case "FETCH_TOP_ANIME_SUCCESS":
      return { ...state, topAnimes: action.payload, loading: false };
    case "FETCH_TOP_ANIME_ERROR":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
