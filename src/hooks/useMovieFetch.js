import React, { useEffect, useState } from "react";

import Api from "../API";

export const useMovieFetch = () => {

  const [state, setstate] = useState({});
  const [oading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  useEffect(() => {

    const fetchData = async () =>{
      try{
        setLoading(true)
        setError(false);

        const movie = await Api.fetchMovie(movieId)

      } catch {
        setError(true);
      }
    }

  },[movieId])
  return <div></div>;
};
