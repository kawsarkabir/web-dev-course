import { useState } from 'react';

export default function ControlledForm() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submiteed');
  };
  const handlePasswordOnChange = (e) => {
    setPassword(e.target.value);
    if (password.length < 6) {
      setError('password charrector must be 6 or longer');
    } else {
      setError('');
    }
  };
  return (
    <>
      <h1>Controlled Foem</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          className="border p-2 my-5"
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          className="border p-2 my-5"
        />
        <input
          type="password"
          name="password"
          defaultValue={password}
          onChange={handlePasswordOnChange}
          placeholder="password"
          className="border p-2 my-5"
        />
        <input type="submit" value="Submit" />
      </form>
      <div>
        <p className="text-red-300">{error}</p>
      </div>
    </>
  );
}
