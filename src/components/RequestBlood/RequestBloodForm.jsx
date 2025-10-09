import React, { useMemo, useState } from "react";
import Button from "../Button";

export default function RequestBloodForm({ onSuccess, onCancel }) {
  const [values, setValues] = useState({
    bloodGroup: "",
    bloodType: "",
    date: "",
    contactNumber: "",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState("");

  const BLOOD_GROUPS = ["A+","A-","B+","B-","AB+","AB-","O+","O-"];
  // In many hospitals, "blood type" in requests means the component needed:
  const BLOOD_COMPONENTS = ["Whole Blood", "Plasma", "Platelets", "Double Red Cells"];

  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d.toISOString().slice(0, 10); // yyyy-mm-dd
  }, []);

  const validate = (draft = values) => {
    const e = {};

    if (!draft.bloodGroup) e.bloodGroup = "Blood group is required.";
    if (!draft.bloodType) e.bloodType = "Please choose a blood component.";

    if (!draft.date) e.date = "Date is required.";
    else if (draft.date < today) e.date = "Date cannot be in the past.";

    const digits = draft.contactNumber.replace(/[^\d]/g, "");
    if (!draft.contactNumber) e.contactNumber = "Contact number is required.";
    else if (digits.length < 10 || digits.length > 15)
      e.contactNumber = "Enter a valid phone (10–15 digits).";

    if (!draft.description.trim()) e.description = "Please describe the need.";
    else if (draft.description.length < 10)
      e.description = "Description must be at least 10 characters.";
    else if (draft.description.length > 500)
      e.description = "Max 500 characters.";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const resetForm = () => {
    setValues({
      bloodGroup: "",
      bloodType: "",
      date: "",
      contactNumber: "",
      description: "",
    });
    setErrors({});
    setNotice("");
  };

 const submit = async (e) => {
  e.preventDefault();
  if (!validate()) return;

  setLoading(true);
  setNotice("");
  try {
    const payload = {
      blood_group: values.bloodGroup,
      blood_component: values.bloodType,
      needed_on: values.date,
      contact_number: values.contactNumber.replace(/\s+/g, ""),
      description: values.description.trim(),
    };

    console.log("Form submitted:", payload); // 👈 Log instead of sending to server

    setNotice("Request logged to console ✅");
    setLoading(false);
    resetForm();
    onSuccess?.(); // optional callback for parent
  } catch (err) {
    setLoading(false);
    setNotice(`Error: ${err.message}`);
  }
};

  return (
    <form onSubmit={submit} className="space-y-5 mt-3" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Blood Group */}
        <fieldset className="border border-[#A1A1A1] rounded-full py-2">
          <legend className="mx-5">Blood Group</legend>
          <select
            name="bloodGroup"
            value={values.bloodGroup}
            onChange={handleChange}
            className="border-none w-full px-5 focus:outline-none bg-transparent"
            required
          >
            <option value="" disabled>
              Select blood group
            </option>
            {BLOOD_GROUPS.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </fieldset>

        {/* Blood Type / Component */}
        <fieldset className="border border-[#A1A1A1] rounded-full py-2">
          <legend className="mx-5">Blood Type</legend>
          <select
            name="bloodType"
            value={values.bloodType}
            onChange={handleChange}
            className="border-none w-full px-5 focus:outline-none bg-transparent"
            required
          >
            <option value="" disabled>
              Select component
            </option>
            {BLOOD_COMPONENTS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </fieldset>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Date */}
        <fieldset className="border border-[#A1A1A1] rounded-full py-2">
          <legend className="mx-5">Date</legend>
          <input
            type="date"
            name="date"
            min={today}
            value={values.date}
            onChange={handleChange}
            className="border-none w-full px-5 focus:outline-none"
            required
          />
        </fieldset>

        {/* Contact Number */}
        <fieldset className="border border-[#A1A1A1] rounded-full py-2">
          <legend className="mx-5">Contact Number</legend>
          <input
            type="tel"
            name="contactNumber"
            placeholder="+8801XXXXXXXXX"
            value={values.contactNumber}
            onChange={handleChange}
            className="border-none w-full px-5 focus:outline-none"
            required
          />
        </fieldset>
      </div>

      {/* Description */}
      <fieldset className="border border-[#A1A1A1] rounded-2xl py-2">
        <legend className="mx-5">Description</legend>
        <textarea
          name="description"
          rows={4}
          value={values.description}
          onChange={handleChange}
          className="border-none w-full px-5 focus:outline-none"
          placeholder="Patient details, hospital/area, urgency, any notes…"
          required
        />
        <div className="flex justify-end px-5 pb-2 text-xs text-gray-500">
          {values.description.length}/500
        </div>
      </fieldset>

      {/* Inline error messages */}
      <div className="grid gap-1 text-sm text-red-600">
        {errors.bloodGroup && <p>{errors.bloodGroup}</p>}
        {errors.bloodType && <p>{errors.bloodType}</p>}
        {errors.date && <p>{errors.date}</p>}
        {errors.contactNumber && <p>{errors.contactNumber}</p>}
        {errors.description && <p>{errors.description}</p>}
      </div>

      {/* Notice */}
      {notice && (
        <div
          className={`text-sm ${
            notice.startsWith("Error") ? "text-red-700" : "text-green-700"
          }`}
        >
          {notice}
        </div>
      )}

      <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-10">
        <Button
          type="button"
          disabled={loading}
          onClick={() => {
            resetForm();
            onCancel?.();
          }}
          className={`w-full md:px-[104px] md:py-[10px]`}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          disabled={loading}
          className={`w-full md:px-[104px] md:py-[10px]`}
        >
          {loading ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </form>
  );
}
