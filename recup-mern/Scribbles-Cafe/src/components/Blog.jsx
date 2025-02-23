import { use } from "react";
import { blogPromise } from "../api/fetchBlog";
import FavBlog from "./FavBlog";
import BlogAside from "./BlogAside";

export default function Blog() {
	return (
		<div>
			<h1 className='text-center mt-16 font-semibold text-2xl'>Latest Blog&apos;s</h1>
			<div className='my-16 container mx-auto grid justify-between grid-cols-3 gap-4'>
				<div className='col-span-2'>
					<BlogContent />
				</div>
				<div className='col-span-1'>
					<FavBlog />
				</div>
			</div>
		</div>
	);
}

const BlogContent = () => {
	const blogs = use(blogPromise);
	return <BlogAside blogs={blogs} />;
};
