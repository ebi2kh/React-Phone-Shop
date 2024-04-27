import { useState } from "react";
import data from "./data.json";
function Faq() {
  const [expanded, setExpanded] = useState(data.map(() => false));

  // Function to toggle expansion
  const toggleExpansion = (index) => {
    const newExpanded = [...expanded]; // Copy the current state
    newExpanded[index] = !newExpanded[index]; // Toggle the state at this index
    setExpanded(newExpanded); // Set the new state
  };
  return (
    <div className="w-full md:w-11/12 mx-auto rounded">
      <div className="bg-white px-2 py-5 md:p-10">
        <h3 className="text-lg font-medium text-gray-800">سوالات پرتکرار</h3>
        {data.map((dat, index) => {
          return (
            <div key={index}>
              {/* header */}
              <div
                className="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-auto min-h-[64px] py-2 sm:h-16 border rounded-xl my-2"
                onClick={() => toggleExpansion(index)}
              >
                <h2 className="opacity-80">{dat.question}</h2>
              </div>
              {/* Content */}
              <div
                className={`accordion-content transition-all px-5 pt-0 overflow-hidden ${
                  expanded[index] ? "max-h-124" : "max-h-0"
                }`}
              >
                <p className="leading-6 font-light pl-9 text-justify opacity-70 pt-2">
                  {dat.answer}
                </p>
                <div className="text-left">
                  <button className="text-sm my-5 opacity-80 text-red-600 hover:text-red-700 transition">
                    توضیحات بیشتر
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Faq;
