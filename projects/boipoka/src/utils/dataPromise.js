export const dataPromise = fetch(
  'https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json',
).then((res) => res.json());
