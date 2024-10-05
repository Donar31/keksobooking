import { GET_URL, POST_URL } from './const.js';

export const getData = () => fetch(GET_URL)
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });

export const postData = (body) => fetch(POST_URL, {
  method: 'POST',
  body
});
