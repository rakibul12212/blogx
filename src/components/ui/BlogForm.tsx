"use client";

import { createBlog } from "@/actions/createBlog";
import { FormValues } from "@/types";
import { useForm } from "react-hook-form";

const CreateBlogForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    const res = await fetch("http://localhost:5000/blogs");
    const blogs = await res.json();
    data.id = JSON.stringify(blogs.length + 1);
    data.total_likes = "100";
    
    try {
      const res = await createBlog(data);
      console.log(res);
    } catch (err: any) {
      console.log(err.message);
      throw new Error(err.message)
    }
  };

  return (
    <div className="my-10">
      <h1 className="text-center text-4xl">
        Post Your <span className="text-accent">Blog</span>
      </h1>

      <div className="hero mt-10">
        <div className="card w-[50%] shadow-xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                {...register("title")}
                placeholder="Title"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                {...register("description")}
                placeholder="Description"
                className="textarea textarea-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Publish Date</span>
              </label>
              <input
                {...register("publish_date")}
                type="date"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Author Name</span>
              </label>
              <input
                type="text"
                {...register("author_name")}
                placeholder="Author Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Blog Image</span>
              </label>
              <input
                type="url"
                {...register("blog_image")}
                placeholder="Image URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-accent btn-outline">
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBlogForm;
