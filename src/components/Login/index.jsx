import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

export default function Login() {
  return (
    <div className="relative min-h-screen">
      {/* Background image and overlay */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/socal/loginbg.webp')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Main content */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-[48px] justify-center items-center container mx-auto py-[66px] px-10">
        <div className="hidden md:block">
          <LeftSide />
        </div>
        <RightSide />
      </div>
    </div>
  );
}
