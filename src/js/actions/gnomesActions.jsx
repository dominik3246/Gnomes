import axios from 'axios';

export function fetchGnomes() {
  return (dispatch) => {
    dispatch({ type: 'FETCH_GNOMES' });

    const URL =
      'http://master.datasource.jazzy-hr.jzapp.io/api/v1/gnomes?_format=json&limit=10&offset=0';
    axios
      .get(URL)
      .then((response) => {
        dispatch({ type: 'FETCH_GNOMES_FULFILLED', payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_WEATHER_REJECTED', payload: error });
      });
  };
}

export function sendDataRequestChange(data) {
  return (dispatch) => {
    dispatch({ type: 'PATCH_GNOMES' });
    axios
      .patch(`http://master.datasource.jazzy-hr.jzapp.io/api/v1/gnomes/${data.id}`, {
        id: data.id,
        name: data.newName,
        age: data.newAge,
        strenght: data.newStrenght,
      })
      .then((response) => {
        dispatch(fetchGnomes());
        dispatch({ type: 'PATCH_GNOMES_FULFILLED', payload: response.status });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: 'PATCH_GNOMES_REJECTED', payload: 'CODE 422' });
      });
  };
}
