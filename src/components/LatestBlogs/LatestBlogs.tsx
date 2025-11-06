
import LatestBlogCard from "../ui/LatestBlogCard";
import BlogCard from "../ui/BlogCard";
import { Blog } from "@/types";

const LatestBlogs = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div className="w-[90%] mx-auto">
      <p className="text-4xl text-center my-5">
        Latest Blogs From <span className="text-accent">BlogX</span>
      </p>
      <p className="text-xl text-center text-gray-400 w-2/4 mx-auto">
        <i>
          Discover our most recent posts covering emerging technologies,
          development tips, product reviews, and industry best practices —
          curated to help you stay ahead.
        </i>
      </p>
      <div className="grid grid-cols-2 gap-4 my-5">
        {blogs.slice(0, 2).map((blog) => (
          <LatestBlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4 my-5">
        {blogs.slice(3, 6).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
