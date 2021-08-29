import { useEffect, useState } from "react";

import API from "../API";
//helpers
import { isPersistedState } from "../helpers";

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
    const sessionState = isPersistedState(movieId);

    if (sessionState) {
      setstate(sessionState);
      setLoading(false);
      return;
    }
    fetchMovie();
  }, [movieId]);

  //write to session storage
  useEffect(() => {
    sessionStorage.setItem(movieId, JSON.stringify(state));
  }, [movieId, state]);

  
  return { state, loading, error };
};
