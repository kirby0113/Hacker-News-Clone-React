import "./App.css";
import { useState, useEffect } from "react";
import { getItem, getItems } from "./API/item.js";
import { getTopStories } from "./API/stories.js";

function App() {
  const [stories, setStories] = useState([]);
  const [test, setTest] = useState([]);

  useEffect(() => {
    getTopStories().then((json) => setStories(json));
  }, []);

  useEffect(() => {
    getItems(stories).then((json) => {
      Promise.all(json).then((values) => {
        setTest(values);
      });
    });
  }, [stories]);

  return (
    <div className="App">
      {test.map((element) => (
        <div>
          <a href={element.url} key={element.id}>
            {element.title}
          </a>
        </div>
      ))}
    </div>
  );
}

export default App;
