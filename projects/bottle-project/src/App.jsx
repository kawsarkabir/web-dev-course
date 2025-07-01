import { Suspense } from 'react';
import Bottles from './Bottles';

const bottlesPromise = fetch('bottles.json').then((res) => res.json());
export default function App() {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="my-10 text-center">
          Welcome to our{' '}
          <span className="bg-sky-500 text-white py-1 px-2">
            bottle project!
          </span>
        </h1>
        <Suspense fallback={<h1>products loading.......</h1>}>
          <Bottles bottlesPromise={bottlesPromise} />
        </Suspense>
      </div>
    </>
  );
}
