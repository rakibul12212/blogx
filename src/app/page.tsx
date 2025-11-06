import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";




const HomePage = async () => {
  const res = await fetch("http://localhost:5000/blogs", { cache: "no-store" });
  const blogs = await res.json();
  console.log (blogs);
  return (
    <>
      <LatestBlogs blogs={blogs} />
    </>
  );
};

export default HomePage;
