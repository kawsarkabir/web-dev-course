import { use } from "react";
import { blogPromise } from "../api/fetchBlog";
import FavBlog from "./FavBlog";
import BlogAside from "./BlogAside";

export default function Blog() {
	return (
		<div className='my-6 container mx-auto grid justify-between grid-cols-4 gap-4'>
			<div className='col-span-3'>
				<BlogContent />
			</div>
			<div className='col-span-1 justify-items-end'>
				<FavBlog />
			</div>
		</div>
	);
}

const BlogContent = () => {
	const blogs = use(blogPromise);
	return <BlogAside blogs={blogs} />;
};
