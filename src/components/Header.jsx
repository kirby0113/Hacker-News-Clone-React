import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledHeader = styled.div`
  background-color: #efebe9;
  color: #37474f;
  display: grid;
  grid-template-columns: max-content 1fr;
  align-items: center;
`;

const HeaderTitle = styled.div`
  padding: 10px;
  font-size: 1.6rem;
  font-weight: 900;
  display: grid;
  grid-template-columns: max-content;
  grid-template-rows: repeat(2, max-content);
  justify-items: center;
  font-family: "Merriweather", serif;
`;

const HeaderLinks = styled.div`
  padding: 10px;
  font-size: 1.4rem;
  letter-spacing: 2px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-items: center;
  font-family: raleway;
`;

const StyledLink = styled.div``;

export const Header = ({ onChangeMode }) => {
  return (
    <StyledHeader>
      <HeaderTitle>
        <span>Hacker</span>
        <span>News</span>
      </HeaderTitle>
      <HeaderLinks>
        <StyledLink onClick={() => onChangeMode("top")}>Top</StyledLink>
        <StyledLink onClick={() => onChangeMode("new")}>New</StyledLink>
        <StyledLink onClick={() => onChangeMode("best")}>Best</StyledLink>
        <StyledLink onClick={() => onChangeMode("ask")}>Ask</StyledLink>
        <StyledLink onClick={() => onChangeMode("show")}>Show</StyledLink>
        <StyledLink onClick={() => onChangeMode("job")}>Jobs</StyledLink>
      </HeaderLinks>
    </StyledHeader>
  );
};

Header.propTypes = {
  onChangeMode: PropTypes.func,
};
