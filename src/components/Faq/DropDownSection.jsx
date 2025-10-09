import { useState } from "react";

const faqs = [
  {
    question: "What is Blood Point?",
    answer: "Blood Point is a platform that connects donors with patients in need of blood, quickly and reliably.",
  },
  {
    question: "How do I register as a donor?",
    answer: "Click on the 'Register' button, fill out your details, and verify your contact information to join our donor network.",
  },
  {
    question: "Is there any cost to use the service?",
    answer: "No, Blood Point is completely free for both donors and recipients.",
  },
  {
    question: "How do I request blood in an emergency?",
    answer: "Use the 'Request Blood' feature on our homepage, provide patient details, and our system will alert nearby donors instantly.",
  },
  {
    question: "Can I donate if I have a medical condition?",
    answer: "It depends on the condition. We recommend consulting with your doctor and checking our eligibility guidelines before registering.",
  },
  {
    question: "How is donor privacy protected?",
    answer: "We use secure encryption and never share personal data without consent. Donors can choose what information is visible.",
  },
  {
    question: "Is Blood Point available nationwide?",
    answer: "Yes, Blood Point operates across all major cities and rural areas, with expanding coverage every month.",
  },
];


export default function DropDownSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-sm">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left font-semibold text-lg text-gray-800 focus:outline-none"
            >
              <span>{faq.question}</span>
              <svg
                className={`w-5 h-5 transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
