import React, { useState } from "react";
import Subtopic from "./Subtopic";

const Topic = ({ topic }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#f9f9f9] rounded-lg shadow-sm border border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-4 text-left text-gray-800 text-xl font-semibold"
      >
        <span>{topic.title}</span>
        <span>{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className="px-6 pb-4 space-y-4 border">
          {topic.subtopics.map((sub, i) => (
            <Subtopic key={i} sub={sub} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Topic;