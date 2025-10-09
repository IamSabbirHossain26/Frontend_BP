import { Link } from "react-router-dom";
import { blogs } from "../Blogs/blogs";
import Heading from "../Heading";
import Description from "../Description";

export default function RelatedBlogs({ blogId }) {
  const filterBlog = blogs.filter((blog) => blog.id !== blogId);
  const fixedBlog = filterBlog.slice(0, 3);
  return (
    <div className="container mx-auto px-10">
      <Heading>Related Blogs</Heading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 py-[23px]">
        {fixedBlog.map((blog) => (
          <Link to={`/blog/${blog?.id}`} key={blog?.id}>
            <div className="cursor-pointer">
              <img src={blog?.img} alt={blog?.title} className="w-full" />
              <div className="p-4 space-y-2">
                <Description className={`text-[18px] font-bold`}>
                  {blog?.keyTitle}
                </Description>
                <div className="border border-t-1 border-[#E0E0E0]" />
                <p className="font-[500] text-[11px] text-[#D32F2F]">
                  {blog?.data}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Link to='/blogs' className="flex justify-end py-10">
        <span className="text-[#D32F2F] text-sm">Read More Blogs</span>
      </Link>
    </div>
  );
}
