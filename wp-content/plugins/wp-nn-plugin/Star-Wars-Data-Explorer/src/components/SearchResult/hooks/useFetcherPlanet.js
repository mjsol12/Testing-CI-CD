import { useState, useEffect } from "react";
import axios from "axios";

const useFetchPlanet = () => {
  const [page, setPage] = useState(1);
  const [planets, setPlanet] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    const fetchPlanets = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://swapi.dev/api/planets/?page=${page}`
        );
        setPlanet((prev) => [...prev, ...response.data.results]);
        setHasMore(response.data.next !== null);

        if (response.data.next !== null) {
          setPage((prev) => prev + 1);
        }
      } catch (err) {
        setError(err);
        console.error("Error fetching Star Wars Planet:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlanets();
  }, [page]);

  return { planets, loading, error, hasMore };
};
export default useFetchPlanet;
