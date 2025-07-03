import { use } from 'react';
const userPromise = fetch('http://localhost:5000/users').then((res) =>
  res.json(),
);

export default function Users() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className="container mx-auto px-4 mt-10">
      <h1 className="text-center text-2xl">Users List</h1>
      <section className="bg-sky-50 p-6 justify-center flex">
        <form action="#" onSubmit={handleSubmit}>
          <input type="text" name="name" className="border" /> <br /> <br />
          <input type="email" name="email" className="border" /> <br /> <br />
          <input
            type="submit"
            value="submit"
            className="bg-sky-400 text-white rounded py-1 px-4 cursor-pointer"
          />
        </form>
      </section>
      <div className="flex justify-center flex-col items-center mt-10">
        <h1>Hoooooo</h1>
      </div>
    </div>
  );
}
