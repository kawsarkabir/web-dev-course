import Brother from './Brother';
import Myself from './Myself';
import Sis from './Sis';

export default function Dad() {
  return (
    <div className="border-emerald-200 border-2 p-4">
      <h1>Dad</h1>
      <section className='grid grid-cols-3 gap-5'>
        <Myself />
        <Brother />
        <Sis />
      </section>
    </div>
  );
}
