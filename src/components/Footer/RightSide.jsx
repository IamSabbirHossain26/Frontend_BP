import { Link } from "react-router-dom";
import Heading from "../Heading";
const links = [
    {id:1,title:'Home',path:'/'},
    {id:2,title:'Add Blood Request',path:'/register'},
    {id:3,title:'search Blood Doner',path:'/donor-list'},
    {id:4,title:'FAQ',path:'#'},
    {id:5,title:'About Us',path:'/about'},
    {id:6,title:'Contact Us',path:'#'},
]
export default function RightSide(){
    return(
        <div>
            <Heading className={`md:text-[60px] text-white mb-3`}>Important Links </Heading>
            <div>
                {
                    links.map(link=>(
                        <Link to={link?.path} key={link?.id} className="md:text-[20px] font-normal text-white flex flex-col">{link?.title}</Link>
                    ))
                }
            </div>
        </div>
    )
}