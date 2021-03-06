import { CLIENT_ID, CLIENT_SECRET } from '../config/credentials';

const API = 'https://api.foursquare.com/v2/venues';

const VERSION = '20190208';

const CATEGORIES = {
  hamburgueria: '4d4b7105d754a06374d81259',
};

const queryParams = params => Object.keys(params)
  .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
  .join('&');

export const getVenues = (lat, lng) => {
  const categoryId = Object.keys(CATEGORIES).map(cat => CATEGORIES[cat]);
  const params = {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    v: VERSION,
    ll: `${lat},${lng}`,
    categoryId: `${categoryId}`,
    radius: 1000,
    limit: 50,
  };

  const url = `${API}/search?${queryParams(params)}`;

  return fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw res;
      }
      return res.json();
    })
    .then(data => data.response.venues)
    .catch((error) => {
      console.error(error);
      window.alert('Error: Failed to get venues in Fourquare API');
    });
};
