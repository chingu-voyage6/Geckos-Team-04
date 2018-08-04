import { signout } from './api-auth';

const authenticate = (jwt, done) => {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('jwt', JSON.stringify(jwt));
  }
  done();
};

const isAuthenticated = () => {
  if (typeof window === 'undefined') {
    return false;
  }
  if (sessionStorage.getItem('jwt')) {
    return JSON.parse(sessionStorage.getItem('jwt'));
  }
  return false;
};

const logout = done => {
  if (typeof window !== 'undefined') {
    sessionStorage.removeItem('jwt');
  }
  done();
  signout().then(() => {
    document.cookie = 't=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  });
};

export { authenticate, isAuthenticated, logout };
