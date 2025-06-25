import useInputField from '@/hooks/useInputField';

export default function HookForm() {
  const [name, nameOnChange] = useInputField('');
  const [email, emailOnChange] = useInputField('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log( name, email);
  };

  return (
    <>
      <h1>Custom Hooks Form</h1>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={nameOnChange} type="text" name="name" id="name" placeholder="name" />
        <br /><br />
        <input value={email} onChange={emailOnChange} type="email" name="email" id="email" placeholder="email" />
        <br /><br />
        <input type="password" name="password" id="password" placeholder="password" />
        <br /><br />
        <input type="submit" value="submit" />
      </form>
    </>
  );
}
