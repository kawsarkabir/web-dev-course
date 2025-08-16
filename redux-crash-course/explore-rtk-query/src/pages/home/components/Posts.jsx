import { useGetPostsQuery } from "@/store/features/api/baseApi";
import { Link } from "react-router";

export default function Posts() {
    const { data: posts, isLoading, isError } = useGetPostsQuery();

    if (isLoading) return <p className="text-center text-gray-500">Loading...</p>;
    if (isError) return <p className="text-center text-red-500">Something went wrong!</p>;

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-center mb-8">Latest Blogs</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {posts?.map((post) => (
                    <div
                        key={post.id}
                        className="bg-white rounded-2xl shadow hover:shadow-md transition duration-300 overflow-hidden"
                    >
                        {/* Image placeholder (replace with post.image if available) */}
                        <div className="h-48 bg-gradient-to-r from-primary-theme-300 to-secondary-theme-500 flex items-center justify-center text-white font-semibold text-lg">
                            Blog Image
                        </div>

                        <div className="p-5">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
                                {post.title}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                {post.body}
                            </p>

                            <Link to={`/posts/${post.id}`}>
                                <button className="cursor-pointer inline-block px-4 py-2 rounded-lg bg-blue-500 text-black font-medium hover:bg-primary-theme-500 transition">
                                    Read More
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
