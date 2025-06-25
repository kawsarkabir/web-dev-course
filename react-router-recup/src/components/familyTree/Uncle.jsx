import Cousin from './Cousin';

export default function Uncle() {
  return (
    <div className="border-b-fuchsia-200 border-2 p-4">
      <h1>uncle</h1>
      <section>
        <Cousin name="Ataur" />
      </section>
    </div>
  );
}
