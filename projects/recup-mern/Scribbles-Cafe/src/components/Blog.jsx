/* eslint-disable react/prop-types */
import { use, useState } from "react";
import { blogPromise } from "../api/fetchBlog";
import FavBlog from "./FavBlog";
import BlogAside from "./BlogAside";

export default function Blog() {
	const [bookmarks, setBookMarks] = useState([]);
	const [readTime, setReadTime] = useState(0);

	const handleBookMark = (blog) => {
		const bookmarksList = [...bookmarks, blog];
		setBookMarks(bookmarksList);
	};
	const handleReadTime = (read_time, id) => {
		console.log(id);
		setReadTime(readTime + read_time);
		const remainingBookMarks = bookmarks.filter(
			(bookmark) => bookmark.id != id
		);
		setBookMarks(remainingBookMarks);
	};

	return (
		<div>
			<h1 className='text-center mt-16 font-semibold text-2xl'>
				Latest Blog&apos;s
			</h1>
			<div className='my-16 container mx-auto grid justify-between grid-cols-3 gap-4'>
				<div className='col-span-2'>
					<BlogContent
						handleBookMark={handleBookMark}
						handleReadTime={handleReadTime}
					/>
				</div>
				<div className='col-span-1'>
					<FavBlog bookmarks={bookmarks} readTime={readTime} />
				</div>
			</div>
		</div>
	);
}

const BlogContent = ({ handleBookMark, handleReadTime }) => {
	const blogs = use(blogPromise);
	return (
		<BlogAside
			blogs={blogs}
			handleBookMark={handleBookMark}
			handleReadTime={handleReadTime}
		/>
	);
};
