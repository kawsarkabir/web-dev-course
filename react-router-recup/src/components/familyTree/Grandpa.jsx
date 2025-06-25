import Aunt from './Aunt';
import Dad from './Dad';
import Uncle from './Uncle';

export default function Grandpa() {
  return (
    <div className="border-2 border-pink-200 p-5">
      <h1 className='my-4 text-center'>Grand Pa......</h1>
      <div className='grid grid-cols-3 gap-5'>
        <Dad />
        <Uncle />
        <Aunt />
      </div>
    </div>
  );
}
