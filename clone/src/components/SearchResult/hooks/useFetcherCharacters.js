import { useState, useEffect } from "react";
import axios from "axios";

const useFetchCharacters = ({
  page,
  setResult,
  setPage,
  searchTerm,
  gender,
  homeworld,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  const fetchData = async () => {
    setLoading(true);
    try {
      const newQueryUrl = `https://swapi.dev/api/people/?search=${searchTerm}&page=${page}`;

      const response = await axios.get(newQueryUrl);

      let filteredResults = response.data.results;

      if (gender) {
        filteredResults = filteredResults.filter(
          (person) => person.gender === gender
        );
      }

      if (homeworld) {
        filteredResults = filteredResults.filter(
          (person) => person.homeworld === homeworld
        );
      }

      console.log(homeworld);
      setResult((prevCharacters) =>
        page === 1 ? filteredResults : [...prevCharacters, ...filteredResults]
      );
      setHasMore(response.data.next !== null); // Determine if there are more pages
    } catch (error) {
      setError(error);
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  // Fetch data whenever debouncedSearchTerm, gender, homeworld, or page changes
  useEffect(() => {
    fetchData(page);
  }, [debouncedSearchTerm, gender, homeworld, page]);

  // Reset page when filters change
  useEffect(() => {
    setPage(1);
  }, [debouncedSearchTerm, gender, homeworld]);

  return { loading, error, hasMore };
};

export default useFetchCharacters;
