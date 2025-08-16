import { useCreatePostMutation, useGetPostsQuery } from "@/store/features/api/baseApi";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

export default function Posts() {
    const { data: posts, isLoading, isError } = useGetPostsQuery();
    const [createPost, { data: postData, isLoading: isCreating },] = useCreatePostMutation()
    console.log(postData);
    const { register, handleSubmit, reset } = useForm()

    const onSubmit = async (data) => {
        try {
            await createPost({
                title: data.title,
                body: "This is a new post", // you can extend later
                userId: 1,
            }).unwrap();
            alert("Post created successfully ✅");
            reset(); // clear form
        } catch (error) {
            console.error("Failed to create post:", error);
        }
    };

    if (isLoading) return <p className="text-center text-gray-500">Loading...</p>;
    if (isError) return <p className="text-center text-red-500">Something went wrong!</p>;

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-center mb-8">Latest Blogs</h2>
            {/* New Post Form */}
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="mb-10 flex gap-4 justify-center"
            >
                <input
                    type="text"
                    placeholder="Enter blog title"
                    {...register("title", { required: true })}
                    className="border border-gray-300 rounded-lg px-4 py-2 w-1/2"
                />
                <button
                    type="submit"
                    disabled={isCreating}
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                    {isCreating ? "Submitting..." : "Add Post"}
                </button>
            </form>

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
