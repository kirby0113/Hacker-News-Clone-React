export const getItem = async (id) => {
  //記事を1つ取得
  const item = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  )
    .then((response) => response.json())
    .then((json) => {
      return json;
    });
  return item;
};

export const getItems = async (ids) => {
  //記事を引数のidすべて持ってくる
  const items = await ids.map((id) => {
    console.log(getItem(id));
  });
  console.log(items);
  return items;
};
