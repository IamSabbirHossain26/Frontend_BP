import { Link } from "react-router-dom";
import Description from "../Description";
import { blogs } from "./blogs";

export default function BlogsCards(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 py-[23px] ">
            {
                blogs.map(blog=>(
                    <Link to={`/blog/${blog?.id}`} key={blog?.id}>
                        <div className="cursor-pointer">
                            <img src={blog?.img} alt={blog?.title} className="w-full"/>
                            <div className="p-4 space-y-2">
                                <Description className={`text-[18px] font-bold`}>{blog?.keyTitle}</Description>
                                <div className="border border-t-1 border-[#E0E0E0]"/>
                                <p className="font-[500] text-[11px] text-[#D32F2F]">{blog?.data}</p>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}