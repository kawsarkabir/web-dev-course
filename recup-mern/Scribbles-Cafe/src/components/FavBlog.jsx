/* eslint-disable react/prop-types */
export default function FavBlog({ bookmarks }) {
	console.log(bookmarks);

	return (
		<>
			<div className='bg-[#EFEDFD] text-blue-500 p-4 text-center rounded font-bold'>
				Spend time on read: 10 min
			</div>
			<div className='bg-gray-200 rounded mt-8 p-5'>
				<h2 className='text-lg font-semibold'>
					Bookmarks Blogs: {bookmarks.length}
				</h2>
				<div className='my-4'>
					{bookmarks.map((item) => (
						<h2 key={item} className='bg-gray-50 rounded my-4 p-4'>
							{item.title}
						</h2>
					))}
				</div>
			</div>
		</>
	);
}
