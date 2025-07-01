import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa6";

export default function BlogAside({ blogs, handleBookMark, handleReadTime }) {
	console.log(blogs);

	return (
		<>
			{blogs.map((blog) => {
				// ✅ Destructure inside the loop
				const {
					id,
					img,
					author,
					author_img,
					date,
					read_time,
					title,
					tag,
				} = blog;

				return (
					<div
						key={id}
						className='mb-16 pb-4 border-b-slate-300 border-b-2'>
						<div>
							<img
								src={img}
								className='max-w-full object-cover rounded'
							/>
						</div>
						<div className='flex justify-between py-5'>
							<div className='flex items-center gap-2'>
								<img
									src={author_img}
									alt=''
									className='w-10 h-10 rounded-full'
								/>
								<div>
									<h5 className='font-bold'>{author}</h5>
									<small className='text-[#444] font-semibold'>
										{date}
									</small>
								</div>
							</div>
							<div className='flex text-[#444] items-center gap-2'>
								<span>{`${read_time} min read`}</span>
								<FaRegBookmark
									size={20}
									className='cursor-pointer'
									onClick={() => handleBookMark(blog)}
								/>
							</div>
						</div>
						<h2 className='text-3xl font-bold'>{title}</h2>
						<div className='flex items-center my-2 gap-3'>
							{tag?.map((item) => (
								<span key={item}>{`#${item}`}</span>
							))}
						</div>
						<button
							className='text-blue-500 font-bold cursor-pointer'
							onClick={() => handleReadTime(read_time, id)}>
							Mark as Read
						</button>
					</div>
				);
			})}
		</>
	);
}

BlogAside.propTypes = {
	blogs: PropTypes.array.isRequired, // ✅ Add `.isRequired` to avoid undefined errors
	handleBookMark: PropTypes.func.isRequired,
	handleReadTime: PropTypes.func.isRequired,
};
