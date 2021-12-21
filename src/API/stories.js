export const getTopStories = async () => {
  return await fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
    .then((response) => {
      if (!response.ok) {
        console.error("response.ok:", response.ok);
        console.error("response.status:", response.status);
        console.error("response.statusText:", response.statusText);
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((json) => {
      return json;
    })
    .catch((error) => {
      return new Error("can`t get stories.");
    });
};
