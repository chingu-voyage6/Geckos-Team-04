import config from '../config';

const API_URL = config.apiUrl;

const singin = user => {
  return fetch(`${API_URL}/auth/singin/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(user),
  })
    .then(response => response.json())
    .catch(err => console.log(err));
};

const signout = () => {
  return fetch(`${API_URL}/auth/signout/`, {
    method: 'GET',
  })
    .then(response => response.json())
    .catch(err => console.log(err));
};

export { singin, signout };
