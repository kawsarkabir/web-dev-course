export const postPromise = fetch(
  'https://jsonplaceholder.typicode.com/posts',
).then((res) => res.json());
