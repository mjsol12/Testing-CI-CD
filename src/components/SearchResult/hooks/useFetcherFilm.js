import { useState, useEffect } from "react";
import axios from "axios";

const useFetchFilms = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFilms = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://swapi.dev/api/films/`);
        setFilms(response.data.results);
      } catch (err) {
        setError(err);
        console.error("Error fetching Star Wars films:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFilms();
  }, []);

  return { films, loading, error };
};
export default useFetchFilms;
