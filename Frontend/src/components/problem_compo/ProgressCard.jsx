import React from 'react';

const ProgressCard = ({ label, value, total }) => {
  const percentage = Math.round((value / total) * 100);

  return (
    <div className="flex flex-col items-center  px-4 py-3 ">
      <span className="text-lg font-semibold text-gray-800">{value} / {total}</span>
      <span className="text-sm text-gray-600">{label}</span>

      <div className="w-full bg-gray-200 rounded h-2 mt-2">
        <div
          className="h-2 bg-[#00b8a3] rounded transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressCard;