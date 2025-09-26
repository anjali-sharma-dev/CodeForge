import React, { useState } from "react";

const Subtopic = ({ sub }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-md border border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-3 text-left text-gray-700 text-lg font-medium"
      >
        <span>{sub.name}</span>
        <span>{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <ul className="pl-6 pb-3 list-disc text-gray-600 space-y-1">
          {sub.questions.map((q, idx) => (
            <li key={idx} className="hover:text-[#00b8a3] cursor-pointer">{q}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Subtopic;