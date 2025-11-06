"use client";
import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/api/baseApi";
import { Blog } from "@/types";


const BlogsPage = () => {
  const { data: allBlogs, isLoading, isError, error } = useGetBlogsQuery("");
  return (
    <div className="w-[90%] mx-auto ">
      <p className="text-4xl text-center my-5">
        All Blogs From <span className="text-accent">BlogX</span>
      </p>
      <p className="text-xl text-center text-gray-400 w-2/4 mx-auto">
        <i>
          Discover our most recent posts covering emerging technologies,
          development tips, product reviews, and industry best practices —
          curated to help you stay ahead.
        </i>
      </p>
      <div className="grid grid-cols-3 gap-4 my-5">
        {allBlogs?.map((blog: Blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
