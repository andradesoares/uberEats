import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (location, activeTab) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          term: 'restaurant',
          limit: 5,
          location: location,
        },
      });
      const results = response.data.businesses;
      const restaurants = results.filter((result) =>
        result.transactions.includes(activeTab.toLowerCase())
      );
      setData(restaurants);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Something went wrong');
    }
  };

  return [data, errorMessage, searchApi];
};
