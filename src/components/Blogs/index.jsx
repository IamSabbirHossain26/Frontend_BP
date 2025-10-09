import BlogsCards from "./BlogsCards";
import BlogsHero from "./BlogsHero";

export default function Blogs(){
    return(
        <div className="container mx-auto py-10 px-10">
            <BlogsHero/>
            <BlogsCards/>
        </div>
    )
}