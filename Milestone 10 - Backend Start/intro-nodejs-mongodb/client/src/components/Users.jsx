import { use ,useState } from 'react';
const userPromise = fetch("http://localhost:5000/users").then(res=>res.json())

export default function Users() {
    const initialUsers = use(userPromise)
  const [users, setUsers] = useState(initialUsers);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const users = { name, email };
    // console.log(users);

    // create user in server
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(users),
    })
      .then((res) => res.json())
      .then((data) => setUsers(data));
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
        {users.map((user) => (
          <div key={user.id}>
            <h2>Name: {user.name}</h2>
            <h2>Email: {user.email}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
