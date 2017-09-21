export default function gnomeReducer(
  state = {
    gnomes: [],
    fetching: false,
    fetched: false,
    error: null,
    dataToChange: [],
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
    case 'SAVE_DATA_TO_CHANGE': {
      return {
        ...state,
        dataToChange: action.payload,
      };
    }
    default:
      return state;
  }
}
