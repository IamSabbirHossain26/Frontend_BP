import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Description from "../Description";
import Heading from "../Heading";
import { registerUser } from "../../../data/registerUser";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context";
import { useEffect } from "react";

export default function RightSide() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      login(JSON.parse(storedUser));
      navigate("/home");
    }
  }, []);
  //   const onSubmit = (data) => {
  //     console.log("Form submitted:", data);

  //     // You can add login logic here (e.g., API call)
  //     reset();
  //   };
  const onSubmit = (data) => {
    const matchedUser = registerUser.find(
      (user) => user.email === data.email && user.password === data.password
    );

    if (matchedUser) {
      login(matchedUser);
      alert(`Welcome back, ${matchedUser.fullName}!`);
      // After successful login
      navigate("/home");
      // You can redirect or store session info here
    } else {
      alert("Invalid email or password.");
    }

    reset();
  };

  return (
    <div className="relative">
      {/* Login Card */}
      <div className="md:w-[566px] md:h-[686px] rounded-2xl bg-[#D32F2F] flex flex-col justify-center items-center py-4 px-6">
        <Heading className="text-white">Blood Point</Heading>
        <Description className="text-white text-[20px] md:text-[32px] text-center">
          Login to account
        </Description>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="my-[51px] space-y-5 w-full max-w-[390px]"
        >
          {/* Email Field */}
          <div className="relative">
            {/* <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">📧</span> */}
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
              className="w-full pl-10 p-2 bg-[#D32F2F] ring-1 ring-white text-white placeholder-white rounded"
            />
            {errors.email && (
              <p className="text-sm text-white mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="relative">
            {/* <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">🔒</span> */}
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
              className="w-full pl-10 p-2 bg-[#D32F2F] ring-1 ring-white text-white placeholder-white rounded"
            />
            {errors.password && (
              <p className="text-sm text-white mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="flex justify-between items-center pb-10">
            <button
              type="submit"
              className="text-white border border-white px-5 py-2 hover:bg-white hover:text-[#D32F2F] rounded"
            >
              Log in
            </button>
            <Link to="#" className="text-white text-sm hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Mobile Social Login */}
          <p className="md:hidden text-white text-center text-sm mt-5">
            Or login with
          </p>
          <div className="flex md:hidden flex-col justify-center gap-5 items-center">
            <img
              src="/socal/facebook.svg"
              alt="Facebook login"
              className="bg-white p-1 rounded h-[50px] w-full"
            />
            <img
              src="/socal/google.svg"
              alt="Google login"
              className="bg-white p-1 rounded h-[50px] w-full"
            />
          </div>
          <p className="md:hidden text-white text-center text-sm">
            Not a member?{" "}
            <Link to="/register" className="underline">
              Sign up now
            </Link>
          </p>
        </form>
      </div>

      {/* Desktop Social Login */}
      <div className="hidden md:flex absolute bottom-0 bg-white rounded-t-2xl md:w-[566px] md:h-[204px] flex-col justify-center items-center space-y-2">
        <p className="text-[#D32F2F] font-semibold">Or login with</p>
        <div className="flex justify-center gap-5">
          <img src="/socal/facebook.svg" alt="Facebook login" />
          <img src="/socal/google.svg" alt="Google login" />
        </div>
        <Link to="/register">
          <p className="text-[#D32F2F] underline">Register new account</p>
        </Link>
      </div>
    </div>
  );
}
