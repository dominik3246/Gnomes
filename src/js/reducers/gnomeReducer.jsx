export default function gnomeReducer(
  state = {
    gnomes: [],
    fetching: false,
    fetched: false,
    error: null,
    responseCode: null,
    dataToChange: [],
    patching: false,
    patched: false,
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
    case 'PATCH_GNOMES': {
      return {
        ...state,
        patching: true,
      };
    }
    case 'PATCH_GNOMES_REJECTED': {
      return {
        ...state,
        patching: false,
        responseCode: action.payload,
      };
    }
    case 'PATCH_GNOMES_FULFILLED': {
      return {
        ...state,
        patching: false,
        patched: true,
        responseCode: action.payload,
      };
    }
    default:
      return state;
  }
}
