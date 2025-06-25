import Cousin from './Cousin';

export default function Aunt() {
  return (
    <div className="border-b-lime-200 border-2 p-4">
      <h1>Aunt</h1>
      <section>
        <Cousin name="khadija" />
      </section>
    </div>
  );
}
