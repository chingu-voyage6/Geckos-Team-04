const create = (url, user) => {
  return fetch(`${url}/user`, {
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

const read = (url, params, credentials) => {
  return fetch(`${url}/user/${params.userId}`, {
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

const update = (url, user, params, credentials) => {
  return fetch(`${url}/user/${params.userId}`, {
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

const remove = (url, params, credentials) => {
  return fetch(`${url}/user/${params.userId}`, {
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
