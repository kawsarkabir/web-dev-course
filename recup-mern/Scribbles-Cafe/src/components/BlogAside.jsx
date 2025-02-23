import PropTypes from "prop-types";

export default function BlogAside({ blogs }) {
	console.log(blogs);
	return (
		<h2 className='text-xl font-medium italic text-neutral-900'>
			{blogs.map((blog) => (
				<div key={blog.id}>
					<img src={blog?.img} />
					<h2>{blog.title}</h2>
				</div>
			))}
		</h2>
	);
}

BlogAside.propTypes = {
	blogs: PropTypes.array,
};
