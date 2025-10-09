import { useParams } from "react-router-dom"
import { blogs } from "../src/components/Blogs/blogs";
import Heading from "../src/components/Heading";
import Description from "../src/components/Description";
import RelatedBlogs from "../src/components/RelatedBlogs";

export default function SingleBlogPage(){
    const {id} = useParams();
    const getId = parseInt(id)
    const exactBlog = blogs.find(blog=>blog.id === getId)
    return(
        <>
            <div className="container mx-auto py-[51px] px-10">
                <img src={exactBlog?.img} alt={exactBlog?.title} className="w-full max-h-[436px] pb-[51px] object-cover"/>
                <div className="pb-10 md:pb-20">
                    <Heading>{exactBlog?.title}</Heading>
                    <Description>{exactBlog?.keyTitle}</Description>
                    <div className="border-t-1 border-black w-full my-[37px]"/>
                    <Description className={`text-[#868686] italic font-[600] py-10 md:py-15 lg:py-[33px] text-[32px] leading-none`}>{exactBlog?.term}</Description>
                    <Heading className={`font-[600] text-[51px] text-black py-5 md:py-10 leading-none`}>{exactBlog?.question}</Heading>
                    <div className="space-y-5">
                        <p className={`font-[400] text-[18px]`}>{exactBlog?.answer1}</p>
                        <p className={`font-[400] text-[18px]`}>{exactBlog?.answer2}</p>
                        <p className={`font-[400] text-[18px]`}>{exactBlog?.answer3}</p>
                    </div>
                        <ul>
                            {
                                exactBlog?.quotes?.map(quote=>(
                                    <li className="" key={quote}> . {quote}</li>
                                ))
                            }
                        </ul>
                </div>
            </div>
            <RelatedBlogs blogId={getId}/>
        </>
    )
}