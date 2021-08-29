import React, { useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types';

// Image
import SearchIcon from "../../images/search-icon.svg";
// Styles
import { Wrapper, Content } from "./SearchBar.styles";

export const SearchBar = ({ setSearchTerm }) => {
  const [state, setstate] = useState("");
  const initial = useRef(true);


  useEffect(() => {
  if (initial.current) {
    initial.current = false
    return
  }

    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 1000);

    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <Wrapper>
      <Content>
        <img src={SearchIcon} alt="Search-icon"></img>
        <input
          type="text"
          placeholder="Search Movie"
          onChange={(e) => setstate(e.currentTarget.value)}
          value={state}
        />
      </Content>
    </Wrapper>
  );
};

SearchBar.propTypes = {
  setSearchTerm: PropTypes.object
}
