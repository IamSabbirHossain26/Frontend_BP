import { useForm } from "react-hook-form";
import Button from "../Button";
import Heading from "../Heading";
import { Link } from "react-router-dom";
import { registerUser } from "../../../data/registerUser";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    registerUser.push(data)
    // You can add API logic here
    reset()
    navigate('/login')
  };

  return (
    <div>
      <Heading>Create Account</Heading>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        {/* Full Name */}
        <fieldset className="border border-[#A1A1A1] rounded-full  py-2 px-5">
          <legend className="mx-5">Full Name</legend>
          <input
            type="text"
            {...register("fullName", { required: "Full name is required" })}
            className="border-none w-full px-5 focus:outline-none"
          />
          {errors.fullName && <p className="text-red-500 text-sm px-5">{errors.fullName.message}</p>}
        </fieldset>

        {/* Email */}
        <fieldset className="border border-[#A1A1A1] rounded-full  py-2 px-5">
          <legend className="ml-5">Email Address</legend>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              },
            })}
            className="border-none w-full px-5 focus:outline-none"
          />
          {errors.email && <p className="text-red-500 text-sm px-5">{errors.email.message}</p>}
        </fieldset>

        {/* Contact Number */}
        <fieldset className="border border-[#A1A1A1] rounded-full  py-2 px-5">
          <legend className="ml-5">Contact Number</legend>
          <input
            type="text"
            {...register("contactNumber", {
              required: "Contact number is required",
              pattern: {
                value: /^[0-9]{10,15}$/,
                message: "Enter a valid number",
              },
            })}
            className="border-none w-full px-5 focus:outline-none"
          />
          {errors.contactNumber && <p className="text-red-500 text-sm px-5">{errors.contactNumber.message}</p>}
        </fieldset>

        {/* Blood Group */}
        <fieldset className="border border-[#A1A1A1] rounded-full  py-2 px-5">
          <legend className="ml-5">Blood Group</legend>
          <select name="bloodGroup" id="bloodGroup" className="bg-white w-full px-5 outline-none "{...register("bloodGroup", { required: "Blood group is required" })}>
            <option value="">Select</option>
            <option value="A+">A+</option>
            <option value="A-">A−</option>
            <option value="B+">B+</option>
            <option value="B-">B−</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB−</option>
            <option value="O+">O+</option>
            <option value="O-">O−</option>
          </select>
          {errors.bloodGroup && <p className="text-red-500 text-sm px-5">{errors.bloodGroup.message}</p>}
        </fieldset>
        {/* <fieldset className="border border-[#A1A1A1] rounded-full  py-2 px-5">
          <legend className="ml-5">Blood Group</legend>
          <input
            type="text"
            {...register("bloodGroup", { required: "Blood group is required" })}
            className="border-none w-full px-5 focus:outline-none"
          />
          {errors.bloodGroup && <p className="text-red-500 text-sm px-5">{errors.bloodGroup.message}</p>}
        </fieldset> */}

        {/* Current Address */}
        <fieldset className="border border-[#A1A1A1] rounded-full  py-2 px-5">
          <legend className="ml-5">Current Address</legend>
          <input
            type="text"
            {...register("currentAddress", { required: "Address is required" })}
            className="border-none w-full px-5 focus:outline-none"
          />
          {errors.currentAddress && <p className="text-red-500 text-sm px-5">{errors.currentAddress.message}</p>}
        </fieldset>
        {/* Password */}
        <fieldset className="border border-[#A1A1A1] rounded-full  py-2 px-5">
          <legend className="ml-5">Password</legend>
          <input
            type="password"
            {...register("password", { required: "password is required" })}
            className="border-none w-full px-5 focus:outline-none"
          />
          {errors.password && <p className="text-red-500 text-sm px-5">{errors.password.message}</p>}
        </fieldset>

        {/* Submit Button */}
        <Button className="mt-[44px] w-full md:w-max mb-2" type="submit">
          Submit
        </Button>
      </form>
      <span className="text-red-500">Already have an account? <Link to='/login' className="underline">login</Link></span>
    </div>
  );
}
