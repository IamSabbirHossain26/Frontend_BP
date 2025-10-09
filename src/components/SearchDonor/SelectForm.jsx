import { useNavigate } from "react-router-dom";
import Button from "../Button";

export default function SelectForm() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const bloodGroup = formData.get("bloodGroup");
    const district = formData.get("district");
    // const donorType = formData.get("donorType");

    console.log("Blood Group:", bloodGroup);
    console.log("District:", district);
    // console.log("Donor Type:", donorType);
    navigate(`/donor-list?blood-group=${encodeURIComponent(bloodGroup)}&location=${encodeURIComponent(district)}`)
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col justify-between md:items-end gap-5"
    >
      <div className="flex flex-col md:flex-row gap-[22px]">
        <div className="flex flex-col items-start">
          <label htmlFor="bloodGroup">Blood Group</label>
          <select name="bloodGroup" id="bloodGroup" className="bg-white w-full md:w-[200px]">
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
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="district">District</label>
          <select name="district" id="district" className="bg-white w-full md:w-[200px]">
            <option value="">Select</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chittagong">Chittagong</option>
            <option value="Sylhet">Sylhet</option>
            <option value="Rajshahi">Rajshahi</option>
          </select>
        </div>
        {/* <div className="flex flex-col items-start">
          <label htmlFor="donorType">Donor Type</label>
          <select name="donorType" id="donorType" className="bg-white w-full md:w-[200px]">
            <option value="">Select</option>
            <option value="Regular">Regular</option>
            <option value="First-time">First-time</option>
            <option value="Occasional">Occasional</option>
          </select>
        </div> */}
      </div>
      <div>
        <Button className="w-full md:w-max" type="submit">Search</Button>
      </div>
    </form>
  );
}
