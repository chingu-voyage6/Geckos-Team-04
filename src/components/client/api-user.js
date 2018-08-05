import config from '../config';

const API_URL = config.apiUrl;

const create = user => {
  return fetch(`${API_URL}/user`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then(response => response.json())
    .catch(err => console.log(err));
};

const read = (params, credentials) => {
  return fetch(`${API_URL}/user/${params.userId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${credentials.t}`,
    },
  })
    .then(response => response.json())
    .catch(err => console.log(err));
};

const update = (user, params, credentials) => {
  return fetch(`${API_URL}/user/${params.userId}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${credentials.t}`,
    },
    body: JSON.stringify(user),
  })
    .then(response => response.json())
    .catch(err => console.log(err));
};

const remove = (params, credentials) => {
  return fetch(`${API_URL}/user/${params.userId}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${credentials.t}`,
    },
  })
    .then(response => response.json())
    .catch(err => console.log(err));
};

export { create, read, update, remove };
