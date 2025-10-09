import { useState } from "react";
import Button from "../Button";
import { donorpersonelist } from "../DonorList/donorpersonlist";
import { useSearchParams } from "react-router-dom";

export default function DonorList2() {
  const [searchParams] = useSearchParams()
  const searchBlood = searchParams?.get('blood-group')?.toUpperCase()
  const searchLocation = searchParams?.get('location')
  const [bloodGroup, setBloodGroup] = useState(searchBlood);
  const [location, setLocation] = useState(searchLocation);
  const [currentPage, setCurrentPage] = useState(1);
  
  const donorsPerPage = 10;

  const filteredDonors = donorpersonelist.filter((donor) => {
    const matchBlood = bloodGroup ? donor.bloodGroup === bloodGroup : true;
    const matchLocation = location ? donor.location.toLowerCase().includes(location.toLowerCase()) : true;
    return matchBlood && matchLocation;
  });

  const totalPages = Math.ceil(filteredDonors.length / donorsPerPage);
  const startIndex = (currentPage - 1) * donorsPerPage;
  const currentDonors = filteredDonors.slice(startIndex, startIndex + donorsPerPage);

  const handleReset = () => {
    setBloodGroup("");
    setLocation("");
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto p-10">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-[24px]">Available Donors</h2>
        <Button className="rounded-md">Sign in to Request Blood</Button>
      </div>

      {/* Filters */}
      <div className="mt-6 space-y-4 flex flex-col md:flex-row gap-2 md:items-end">
        {/* Blood Group Filter */}
        <div>
          <label htmlFor="bloodGroup" className="block mb-1 font-medium">Blood Group</label>
          <select
            id="bloodGroup"
            value={bloodGroup}
            onChange={(e) => {
              setBloodGroup(e.target.value);
              setCurrentPage(1);
            }}
            className="border px-3 py-2 rounded w-full"
          >
            <option value="">Select Blood Group</option>
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

        {/* Location Filter */}
        <div>
          <label htmlFor="locationInput" className="block mb-1 font-medium">Select or Enter Location</label>
          <input
            list="dhakaLocations"
            id="locationInput"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
              setCurrentPage(1);
            }}
            className="border px-3 py-2 rounded w-full"
            placeholder="Type or select location"
          />
          <datalist id="dhakaLocations">
            <option value="Dhanmondi" />
            <option value="Gulshan" />
            <option value="Banani" />
            <option value="Uttara" />
            <option value="Mirpur" />
            <option value="Mohammadpur" />
            <option value="Bashundhara" />
            <option value="Tejgaon" />
            <option value="Motijheel" />
            <option value="Farmgate" />
          </datalist>
        </div>

        {/* Reset Button */}
        <button
          onClick={handleReset}
          className="px-3 py-2 rounded-md ring-1 bg-white hover:bg-gray-100 mb-4"
        >
          Reset
        </button>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto">
      <table className="min-w-[700px] w-full mt-10">
        <thead>
          <tr className="bg-red-200 text-left">
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Blood Group</th>
            <th className="px-4 py-2 border">Location</th>
            <th className="px-4 py-2 border">Contact</th>
          </tr>
        </thead>
        <tbody>
          {currentDonors.length > 0 ? (
            currentDonors.map((donor) => (
              <tr key={donor.id} className="odd:bg-gray-100 hover:bg-gray-100">
                <td className="px-4 py-2 border">{donor.name}</td>
                <td className="px-4 py-2 border">{donor.bloodGroup}</td>
                <td className="px-4 py-2 border">{donor.location}</td>
                <td className="px-4 py-2 border">{donor.contactNumber}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="px-4 py-4 text-center text-gray-500">
                No donors found for selected filters.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      </div>

      {/* Pagination */}
      {/* {totalPages > 1 && (
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 rounded border ${
                currentPage === i + 1 ? "bg-red-500 text-white" : "bg-white"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )} */}
      {/* Pagination */}
{totalPages > 1 && (
  <div className="flex justify-center mt-6 gap-4">
    <button
      onClick={() => handlePageChange(currentPage - 1)}
      disabled={currentPage === 1}
      className={`px-4 py-2 rounded border ${
        currentPage === 1 ? "bg-gray-200 text-gray-500 cursor-not-allowed" : "bg-white hover:bg-gray-100"
      }`}
    >
      Previous
    </button>

    <span className="px-4 py-2 text-sm font-medium">
      Page {currentPage} of {totalPages}
    </span>

    <button
      onClick={() => handlePageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
      className={`px-4 py-2 rounded border ${
        currentPage === totalPages ? "bg-gray-200 text-gray-500 cursor-not-allowed" : "bg-white hover:bg-gray-100"
      }`}
    >
      Next
    </button>
  </div>
)}


    </div>
  );
}
