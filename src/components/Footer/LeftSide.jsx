import { Link } from "react-router-dom";
import Description from "../Description";
import Heading from "../Heading";
const links = [
  { id: 1, title: "facebook", img: "./facebook.svg", path: "www.facebook.com" },
  {
    id: 2,
    title: "instagram",
    img: "./instagram.svg",
    path: "www.instagram.com",
  },
  { id: 3, title: "twitter", img: "./twitter.svg", path: "www.twitter.com" },
  { id: 4, title: "tiktok", img: "./tiktok.svg", path: "www.tiktok.com" },
];

export default function LeftSide() {
  return (
    <div>
      <Heading className={`md:text-[60px] text-white`}>Blood Point</Heading>
      <Description className={`md:text-[18px] text-white font-normal`}>
        Rokto is an automated blood service that instantly connects blood
        seekers with voluntary donors through SMS and its website.
      </Description>
      <div className="w-full border-t-2 border-white my-2" />
      <p className="font-normal text-[20px] text-white italic py-2">
        Follow Us On
      </p>
      <div className="flex items-center gap-3">
        {links?.map((link) => (
          <a
            key={link.id}
            href={`https://${link.path}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={link.img}
              alt={link.title}
              className="w-[40px] h-[40px] rounded-full bg-white p-1 cursor-pointer"
            />
          </a>
        ))}
      </div>
      <div className="text-white py-5">
        <p>
          <span>Terms & Condition</span>
          <span> | </span>
          <span>Privacy & Policy</span>
        </p>
        <p>
          <span className="">
            &copy; {new Date().getFullYear()} Blood Point. All rights reserved.
          </span>
        </p>
      </div>
      <div></div>
    </div>
  );
}
