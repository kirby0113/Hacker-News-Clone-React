import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledNewsCard = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  border: solid 2px #263238;
  border-radius: 20px;
  align-items: center;
  background-color: #f5f5f5;
  box-shadow: 3px 3px 4px #00000040;
`;

const NewsCardScore = styled.div`
  display: grid;
  grid-template-columns: max-content;
  grid-template-rows: repeat(2, max-content);
  justify-items: center;
  padding-left: 20px;
`;

const ScoreTextTop = styled.span`
  font-family: "Raleway", serif;
  font-weight: 700;
  font-size: 3rem;
  letter-spacing: 1.5px;
`;

const ScoreTextBottom = styled.span`
  font-family: "Raleway", serif;
  font-weight: 500;
  font-size: 1.3rem;
  letter-spacing: 3px;
  padding-bottom: 13px;
`;

const NewsCardDetail = styled.div`
  padding: 10px 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, max-content);
`;

const NewsCardTitle = styled.span`
  font-family: "Raleway", serif;
  font-weight: 500;
  font-size: 2rem;
  letter-spacing: 2px;
  color: #ff5722;
`;

const NewsCardLink = styled.a`
  margin-top: 2px;
  font-family: "Raleway", serif;
  color: #666666;
  font-weight: 500;
  font-size: 1rem;
  text-decoration: none;
`;

const NewsCardDetailBottom = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: repeat(3, max-content);
  grid-column-gap: 20px;
  align-items: baseline;
`;

const NewsCardAuthor = styled.span`
  font-family: "Raleway", serif;
  font-weight: 400;
  font-size: 1.2rem;
`;

const NewsCardComment = styled.span`
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
`;

const NewsCardDate = styled.span`
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
`;

export const NewsCard = ({ NewsData }) => {
  return (
    <StyledNewsCard>
      <NewsCardScore>
        <ScoreTextTop>{NewsData.score}</ScoreTextTop>
        <ScoreTextBottom>Score</ScoreTextBottom>
      </NewsCardScore>
      <NewsCardDetail>
        <NewsCardTitle>{NewsData.title}</NewsCardTitle>
        <NewsCardLink href={NewsData.url}>( {NewsData.url} )</NewsCardLink>
        <NewsCardDetailBottom>
          <NewsCardAuthor>by:{NewsData.by}</NewsCardAuthor>
          <NewsCardComment>{NewsData.descendants} comments</NewsCardComment>
          <NewsCardDate>
            {new Date(NewsData.time * 1000).toLocaleString()}
          </NewsCardDate>
        </NewsCardDetailBottom>
      </NewsCardDetail>
    </StyledNewsCard>
  );
};

NewsCard.propTypes = {
  NewsData: PropTypes.object,
};
