export default function reducer(
  state = {
    gnomes: [],
    fetching: false,
    fetched: false,
    error: null,
  },
  action,
) {
  switch (action.type) {
    case 'FETCH_GNOMES': {
      return {
        ...state,
        fetching: true,
      };
    }
    case 'FETCH_GNOMES_REJECTED': {
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    }
    case 'FETCH_GNOMES_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        gnomes: action.payload,
      };
    }
    default:
      return state;
  }
}
