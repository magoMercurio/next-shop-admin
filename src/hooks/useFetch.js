import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  /* const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); */

  async function fetchData() {
    const response = await axios.get(endpoint);
    setData(response.data);
    /* setIsLoading(false); */
  }

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return data;
};

export default useFetch;
