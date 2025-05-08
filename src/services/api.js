import { useState, useEffect } from 'react';

const API_URL = 'http://localhost:3000';

const useApi = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(`${API_URL}/${endpoint}`);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  const postData = async (newData) => {
    try {
      const response = await fetch(`${API_URL}/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      });
      await fetchData();
      return response;
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return { data, loading, postData, fetchData };
};

export default useApi;