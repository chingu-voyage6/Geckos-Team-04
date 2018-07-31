const singin = user => {
  return fetch('/auth/signin/', {
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
  return fetch('/auth/sigout/', {
    method: 'GET',
  })
    .then(response => response.json())
    .catch(err => console.log(err));
};

export { singin, signout };
