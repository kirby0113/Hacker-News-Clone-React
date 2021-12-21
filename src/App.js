import "./App.css";
import { useState, useEffect } from "react";
import { getItem, getItems } from "./API/item.js";
import { getTopStories } from "./API/stories.js";

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
      {error ? (
        <div>
          <div>エラーが発生しました。</div>
          <div>{errorMessage}</div>
        </div>
      ) : (
        <div>
          {stories.length > 0 ? (
            test.map((element) => (
              <div>
                <a href={element.url} key={element.id}>
                  {element.title}
                </a>
              </div>
            ))
          ) : (
            <div>loading...</div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
