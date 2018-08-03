const singin = (url, user) => {
  return fetch(`${url}/auth/singin/`, {
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

const signout = url => {
  return fetch(`${url}/auth/signout/`, {
    method: 'GET',
  })
    .then(response => response.json())
    .catch(err => console.log(err));
};

export { singin, signout };
