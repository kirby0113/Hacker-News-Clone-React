import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledHeader = styled.div`
  background-color: #efebe9;
  color: #37474f;
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: max-content;
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
  background-color: inherit;
  height: 100%;
  font-size: 1.7rem;
  letter-spacing: 2px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  font-family: raleway;
`;

const StyledLink = styled.div`
  position: relative;
  background-color: inherit;
  height: 100%;
  transition: background-color 0.5s, color 0.3s;
  &: hover {
    background-color: #222222;
    color: #eeeeee;
  }
`;

const LinkText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Header = ({ onChangeMode }) => {
  return (
    <StyledHeader>
      <HeaderTitle>
        <span>Hacker</span>
        <span>News</span>
      </HeaderTitle>
      <HeaderLinks>
        <StyledLink onClick={() => onChangeMode("top")}>
          <LinkText>Top</LinkText>
        </StyledLink>
        <StyledLink onClick={() => onChangeMode("new")}>
          <LinkText>New</LinkText>
        </StyledLink>
        <StyledLink onClick={() => onChangeMode("best")}>
          <LinkText>Best</LinkText>
        </StyledLink>
        <StyledLink onClick={() => onChangeMode("ask")}>
          <LinkText>Ask</LinkText>
        </StyledLink>
        <StyledLink onClick={() => onChangeMode("show")}>
          <LinkText>Show</LinkText>
        </StyledLink>
        <StyledLink onClick={() => onChangeMode("job")}>
          <LinkText>Jobs</LinkText>
        </StyledLink>
      </HeaderLinks>
    </StyledHeader>
  );
};

Header.propTypes = {
  onChangeMode: PropTypes.func,
};
