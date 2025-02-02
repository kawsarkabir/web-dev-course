import { useEffect, useState } from "react";
import DisplayWatch from "./DisplayWatch";

export default function App() {
	const [watchs, setWatchs] = useState([])

	useEffect(() => {
		fetch("watchs.json")
			.then(res => res.json())
			.then(data => setWatchs(data))
	}, [])

	return (
		<div>
			<h1>Explore Our Popular Products </h1>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-center justify-items-center py-16">
				{
					watchs?.map(productItems => <DisplayWatch key={productItems.id} productItems={productItems} />)
				}
			</div>
		</div>
	);
}