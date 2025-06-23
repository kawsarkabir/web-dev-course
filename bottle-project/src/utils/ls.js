const getDataFromLS = (key) => {
  const storedData = localStorage.getItem(key);
  const data = storedData ? JSON.parse(storedData) : [];
  return data;
};

const addToLS = (key, id) => {
  const data = getDataFromLS(key);
  data.push(id);
  localStorage.setItem(key, JSON.stringify(data));
};

const removeFromLS = (key, id) => {
  const data = getDataFromLS(key);
  const filtered = data.filter((item) => item !== id);
  localStorage.setItem(key, JSON.stringify(filtered));
};
export { addToLS, getDataFromLS, removeFromLS };
