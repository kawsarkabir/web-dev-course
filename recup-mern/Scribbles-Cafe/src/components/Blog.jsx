/* eslint-disable react/prop-types */
import { use, useState } from "react";
import { blogPromise } from "../api/fetchBlog";
import FavBlog from "./FavBlog";
import BlogAside from "./BlogAside";

export default function Blog() {
	const [bookmarks, setBookMarks] = useState([]);

	const handleBookMark = (blog) => {
		const bookmarksList = [...bookmarks, blog];
		setBookMarks(bookmarksList);
	};
	return (
		<div>
			<h1 className='text-center mt-16 font-semibold text-2xl'>
				Latest Blog&apos;s
			</h1>
			<div className='my-16 container mx-auto grid justify-between grid-cols-3 gap-4'>
				<div className='col-span-2'>
					<BlogContent handleBookMark={handleBookMark} />
				</div>
				<div className='col-span-1'>
					<FavBlog bookmarks={bookmarks} />
				</div>
			</div>
		</div>
	);
}

const BlogContent = ({ handleBookMark }) => {
	const blogs = use(blogPromise);
	return <BlogAside blogs={blogs} handleBookMark={handleBookMark} />;
};
