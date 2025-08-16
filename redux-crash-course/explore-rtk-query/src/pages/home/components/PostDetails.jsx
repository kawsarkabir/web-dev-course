import { useGetPostsByIdQuery } from "@/store/features/api/baseApi";
import { useParams } from "react-router";

export default function PostDetails() {
    const { id } = useParams();
    console.log("id from post details perums", id);
    const { data: post, isLoading, isError } = useGetPostsByIdQuery(Number(id));

    if (isLoading) return <p className="text-center text-gray-500">Loading...</p>;
    if (isError) return <p className="text-center text-red-500">Something went wrong!</p>;

    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
            {/* Blog Header */}
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{post?.title}</h1>
            <p className="text-gray-500 text-sm mb-6">
                📅 {new Date().toLocaleDateString()} • ✍️ Admin
            </p>

            {/* Blog Image (placeholder or API image) */}
            <div className="w-full h-64 bg-gradient-to-r from-primary-theme-300 to-secondary-theme-500 flex items-center justify-center text-white text-lg font-semibold rounded-xl mb-8">
                Blog Image
            </div>

            {/* Blog Content */}
            <div className="prose max-w-none text-gray-700 leading-relaxed">
                <p>{post?.body}</p>
            </div>

            {/* Tags / Categories */}
            <div className="mt-8 flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-primary-theme-100 text-primary-theme-600 rounded-full text-sm">
                    Technology
                </span>
                <span className="px-3 py-1 bg-secondary-theme-100 text-secondary-theme-600 rounded-full text-sm">
                    News
                </span>
            </div>

            {/* Navigation Buttons */}
            <div className="mt-10 flex justify-between">
                <button className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800 transition">
                    ← Previous
                </button>
                <button className="px-4 py-2 rounded-lg bg-primary-theme-300 text-white hover:bg-primary-theme-500 transition">
                    Next →
                </button>
            </div>
        </div>
    );
}
