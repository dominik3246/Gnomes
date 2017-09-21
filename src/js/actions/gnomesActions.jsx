import axios from 'axios';

export function fetchGnomes() {
  return (dispatch) => {
    dispatch({ type: 'FETCH_GNOMES' });

    const URL =
      'http://master.datasource.jazzy-hr.jzapp.io/api/v1/gnomes?_format=json&limit=10&offset=0';
    axios
      .get(URL)
      .then((response) => {
        console.log(response.data);
        dispatch({ type: 'FETCH_GNOMES_FULFILLED', payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_WEATHER_REJECTED', payload: err });
      });
  };
}

export function saveDataToChange(arr) {
  return (dispatch) => {
    dispatch({ type: 'SAVE_DATA_TO_CHANGE', payload: arr });
  };
}
