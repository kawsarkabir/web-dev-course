export default function SimpleForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const data = { name, email, password };
    console.log(data);
  };
  return (
    <div className="container mx-auto p-4 shadow space-y-3">
      <h1>Simple Form</h1>
      <p>Fillup your data carefully...!</p>
      <form action="#" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="your name"
          className="border p-2 border-gray-100"
        />
        <br /> <br />
        <input type="email" name="email" placeholder="email type...." />
        <br />
        <br />
        <input type="password" name="password" placeholder="password type..." />
        <br /> <br />
        <input
          type="submit"
          value="Login"
          className="mt-4 bg-blue-400 py-1 px-4 rounded-2xl text-white"
        />
      </form>
    </div>
  );
}
