import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa6";

export default function BlogAside({ blogs, handleBookMark }) {
	return (
		<>
			{blogs.map((blog) => (
				<div
					key={blog.id}
					className='mb-16 pb-4 border-b-slate-300 border-b-2'>
					<div className=' '>
						<img
							src={blog?.img}
							className='max-w-full object-cover rounded'
						/>
					</div>
					<div className='flex justify-between py-5'>
						<div className='flex items-center gap-2'>
							<img
								src={blog.author_img}
								alt=''
								className='w-10 h-10 rounded-full'
							/>
							<div>
								<h5 className='font-bold'>{blog.author}</h5>
								<small className='text-[#444] font-semibold'>
									{blog.date}
								</small>
							</div>
						</div>
						<div className='flex text-[#444] items-center gap-2'>
							<span className=''>{`${blog.read_time} min read`}</span>
							<FaRegBookmark
								size={20}
								className='cursor-pointer'
								onClick={() => handleBookMark(blog)}
							/>
						</div>
					</div>
					<h2 className='text-3xl font-bold'>{blog.title}</h2>
					<div className='flex items-center  my-2 gap-3'>
						{blog.tag.map((item) => (
							<span key={item} className=''>{`#${item}`}</span>
						))}
					</div>
					<button className='text-blue-500 font-bold'>
						Mark as Read
					</button>
				</div>
			))}
		</>
	);
}

BlogAside.propTypes = {
	blogs: PropTypes.array,
	handleBookMark: PropTypes.func,
};
