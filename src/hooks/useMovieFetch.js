import { useEffect, useState } from "react";

import API from "../API";

export const useMovieFetch = (movieId) => {
  const [state, setstate] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setError(false);
        setLoading(true);

        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);
        //get directors
        const directors = credits.crew.filter(
          (member) => member.job === "director"
        );
        setstate({
          ...movie,
          actors: credits.cast,
          directors,
        });
        
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchMovie();
  }, [movieId]);
  return { state, loading, error };
};
