const getDataFromLS = (key) => {
  const storeData = localStorage.getItem(key);
  const data = storeData ? JSON.parse(storeData) : [];
  return data;
};

const addDataToLS = (key, id) => {
  const data = getDataFromLS(key);
  const stringId = String(id);
  if (data.includes(stringId)) {
    alert('id ase vai already');
  } else {
    data.push(stringId);
    localStorage.setItem(key, JSON.stringify(data));
  }
};

export { addDataToLS, getDataFromLS };
