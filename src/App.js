import "./App.css";
import { useState, useEffect } from "react";
import { getItem, getItems } from "./API/item.js";
import { getTopStories } from "./API/stories.js";

function App() {
  const [stories, setStories] = useState([]);
  const [test, setTest] = useState([]);
  const [error, onError] = useState(false);

  useEffect(() => {
    getTopStories().then((json) => {
      if (Array.isArray(json)) {
        setStories(json);
      } else {
        onError(true);
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
        });
    });
  }, [stories]);

  return (
    <div className="App">
      {error ? (
        <div>エラーが発生しました。</div>
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
