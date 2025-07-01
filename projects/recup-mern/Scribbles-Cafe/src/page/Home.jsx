import { Suspense } from "react";
import Blog from "../components/Blog";

export default function Home() {
	return (
		<div className='container mx-auto px-4'>
			<Suspense
				fallback={
					<h2 className='shadow p-4   text-xl text-center font-bold mt-5 flex items-center justify-center h-screen'>
						Loading...
					</h2>
				}>
				<Blog />
			</Suspense>
		</div>
	);
}
