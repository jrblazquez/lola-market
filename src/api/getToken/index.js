import fetch from 'isomorphic-fetch';
import mocks from '../../../servers/mocks/token.json';

export default async () => {
  const url = `${API_URL}/user/session`;

  return fetch(url, {
    method: 'GET',
  }).then((response) => {
    if (response.status >= 400) {
      throw new Error('Bad response from server');
    }
    return response.json();
  });
}