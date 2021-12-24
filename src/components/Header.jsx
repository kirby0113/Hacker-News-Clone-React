import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { FontFamily } from "../constants/Font";

const StyledHeader = styled.div`
  background-color: #efebe9;
  color: #37474f;
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: max-content;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-rows: max-content 1fr;
  }
`;

const HeaderTitle = styled.div`
  padding: 10px;
  font-size: 1.6rem;
  font-weight: 900;
  display: grid;
  grid-template-columns: max-content;
  grid-template-rows: repeat(2, max-content);
  justify-items: center;
  font-family: ${FontFamily["Logo"]}, serif;

  @media (max-width: 900px) {
    font-size: 2.5rem;
    grid-template-columns: repeat(2, max-content);
    grid-template-rows: 1fr;
    grid-column-gap: 20px;
    justify-content: center;
    padding: 20px 0;
  }
`;

const HeaderLinks = styled.div`
  background-color: inherit;
  height: 100%;
  font-size: 1.7rem;
  letter-spacing: 2px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  font-family: ${FontFamily["Primary"]}, serif;

  @media (max-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 70px);
  }
`;

const StyledLink = styled.div`
  position: relative;
  height: 100%;
  ${(props) => {
    if (props.isActive) {
      return css`
        background-color: #222222;
        color: #eeeeee;
        &::before {
          content: "\f0da";
          font-weight: 900;
          font-family: "Font Awesome 5 Free";
          color: #eeeeee;
          position: absolute;
          top: 51%;
          left: 10%;
          transform: translateY(-50%);
        }
      `;
    } else {
      return css`
        cursor: pointer;
        background-color: inherit;
        transition: background-color 0.5s, color 0.3s;
        &: hover {
          background-color: #222222;
          color: #eeeeee;
        }
      `;
    }
  }}

  @media (max-width: 700px) {
  }
`;

const LinkText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Header = ({ onChangeMode, mode }) => {
  const setModeStyle = (checker) => {
    return checker === mode;
  };
  return (
    <StyledHeader>
      <HeaderTitle>
        <span>Hacker</span>
        <span>News</span>
      </HeaderTitle>
      <HeaderLinks>
        <StyledLink
          onClick={() => onChangeMode("top")}
          isActive={setModeStyle("top")}
        >
          <LinkText>Top</LinkText>
        </StyledLink>
        <StyledLink
          onClick={() => onChangeMode("new")}
          isActive={setModeStyle("new")}
        >
          <LinkText>New</LinkText>
        </StyledLink>
        <StyledLink
          onClick={() => onChangeMode("best")}
          isActive={setModeStyle("best")}
        >
          <LinkText>Best</LinkText>
        </StyledLink>
        <StyledLink
          onClick={() => onChangeMode("ask")}
          isActive={setModeStyle("ask")}
        >
          <LinkText>Ask</LinkText>
        </StyledLink>
        <StyledLink
          onClick={() => onChangeMode("show")}
          isActive={setModeStyle("show")}
        >
          <LinkText>Show</LinkText>
        </StyledLink>
        <StyledLink
          onClick={() => onChangeMode("job")}
          isActive={setModeStyle("job")}
        >
          <LinkText>Jobs</LinkText>
        </StyledLink>
      </HeaderLinks>
    </StyledHeader>
  );
};

Header.propTypes = {
  onChangeMode: PropTypes.func,
  mode: PropTypes.string,
};
