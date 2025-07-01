import { useContext } from 'react';
import { AssetContext } from './familyTree';

export default function Speacial() {
  const asset = useContext(AssetContext);
  return (
    <div className="border-2 border-amber-200 p-2">
      <h1>Special</h1>
      <p>Asset from granpa: {asset}</p>
    </div>
  );
}
