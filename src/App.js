import "./App.css";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { getItem, getItems } from "./API/item.js";
import { getTopStories } from "./API/stories.js";
import { Header } from "./components/Header";
import { NewsCard } from "./components/NewsCard";

const NewsCardGrid = styled.div`
  margin-top: 20px;
  position: relative;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(2, 45%);
  grid-column-gap: 20px;
  justify-content: center;
  grid-row-gap: 30px;
`;

function App() {
  const [stories, setStories] = useState([]);
  const [test, setTest] = useState([]);
  const [error, onError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getTopStories().then((json) => {
      if (Array.isArray(json)) {
        setStories(json);
      } else {
        onError(true);
        setErrorMessage("NetworkError: can`t get news...");
      }
    });
  }, []);

  useEffect(() => {
    getItems(stories).then((json) => {
      Promise.all(json)
        .then((values) => {
          setTest(values);
        })
        .catch((e) => {
          onError(true);
          setErrorMessage("NetworkError: can`t get news...");
        });
    });
  }, [stories]);

  return (
    <div className="App">
      <Header />
      {error ? (
        <div>
          <div>エラーが発生しました。</div>
          <div>{errorMessage}</div>
        </div>
      ) : stories.length > 0 ? (
        <NewsCardGrid>
          {test.map((element) => (
            <NewsCard NewsData={element} />
          ))}
        </NewsCardGrid>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
}

export default App;
