import React, { useState } from "react";
import ProgressCard from "../components/problem_compo/ProgressCard";

// 🔹 Topics + Steps Data
const topicsData = [
  {
    step: "Step 1 : Array",
    lectures: [
      {
        title: "Lec 1: Easy",
        progress: { done: 9, total: 9 },
        problems: [
          { name: "User Input / Output", difficulty: "Easy", solved: true },
          { name: "Data Types", difficulty: "Easy", solved: true },
          { name: "If Else statements", difficulty: "Easy", solved: true },
          { name: "Switch Statement", difficulty: "Easy", solved: true },
          { name: "What are arrays, strings?", difficulty: "Easy", solved: true },
          { name: "For loops", difficulty: "Easy", solved: true },
        ],
      },
      {
        title: "Lec 1: Medium",
        progress: { done: 9, total: 9 },
        problems: [
          { name: "User Input / Output", difficulty: "Easy", solved: true },
          { name: "Data Types", difficulty: "Easy", solved: true },
          { name: "If Else statements", difficulty: "Easy", solved: true },
          { name: "Switch Statement", difficulty: "Easy", solved: true },
          { name: "What are arrays, strings?", difficulty: "Easy", solved: true },
          { name: "For loops", difficulty: "Easy", solved: true },
        ],
      },
    ],
  },
  {
    step: "Step 1 : LinkedList",
    lectures: [
      {
        title: "Lec 1: Easy",
        progress: { done: 9, total: 9 },
        problems: [
          { name: "User Input / Output", difficulty: "Easy", solved: true },
          { name: "Data Types", difficulty: "Easy", solved: true },
          { name: "If Else statements", difficulty: "Easy", solved: true },
          { name: "Switch Statement", difficulty: "Easy", solved: true },
          { name: "What are arrays, strings?", difficulty: "Easy", solved: true },
          { name: "For loops", difficulty: "Easy", solved: true },
        ],
      },
      {
        title: "Lec 1: Medium",
        progress: { done: 9, total: 9 },
        problems: [
          { name: "User Input / Output", difficulty: "Easy", solved: true },
          { name: "Data Types", difficulty: "Easy", solved: true },
          { name: "If Else statements", difficulty: "Easy", solved: true },
          { name: "Switch Statement", difficulty: "Easy", solved: true },
          { name: "What are arrays, strings?", difficulty: "Easy", solved: true },
          { name: "For loops", difficulty: "Easy", solved: true },
        ],
      },
    ],
  },
 
];

const Problem = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 py-6">
      <div className="max-w-6xl mx-auto">
   
        <div className="flex flex-col md:flex-row justify-center md:justify-between rounded-xl px-6 py-4 mb-6 bg-[#f9f9f9] shadow-sm">
          <div className="mb-4 md:mb-0">
            <ProgressCard label="Total Progress" value={255} total={455} />
          </div>
          <div className="flex justify-center md:justify-between md:flex-row gap-4 items-center">
            <ProgressCard label="Easy" value={10} total={131} />
            <ProgressCard label="Medium" value={20} total={187} />
            <ProgressCard label="Hard" value={4} total={136} />
          </div>
        </div>


        <div className=" bg-[#f9f9f9] border rounded-lg shadow-sm border-gray-200 py-4 px-4 mb-6">

        <div className="space-y-4 ">
          {topicsData.map((step, idx) => (
            <Step key={idx} step={step} />
          ))}
        </div>
        </div>

      </div>
    </div>
  );
};

export default Problem;

function Step({ step }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="mb-6">
      {/* Step Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-2 text-left"
      >
        <span className="text-xl font-bold">{step.step}</span>
        <span>{open ? "▲" : "▼"}</span>
      </button>

      {open &&
        step.lectures.map((lec, i) => <Lecture key={i} lecture={lec} />)}
    </div>
  );
}

function Lecture({ lecture }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="ml-6 mb-4">
      {/* Lecture Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-2 text-left"
      >
        <span className="text-lg font-semibold">{lecture.title}</span>
        <span className="text-sm text-gray-500">
          {lecture.progress.done} / {lecture.progress.total}
        </span>
      </button>

      {open && (
        <div className="bg-[#f9f9f9] rounded-lg overflow-hidden mt-2 border border-gray-200">
          <table className="w-full text-sm">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="py-2 px-4 text-left">Status</th>
                <th className="py-2 px-4 text-left">Problem</th>
                <th className="py-2 px-4">Resource (Plus)</th>
                <th className="py-2 px-4">Resource (Free)</th>
                <th className="py-2 px-4">Practice</th>
                <th className="py-2 px-4">Note</th>
                <th className="py-2 px-4">Revision</th>
                <th className="py-2 px-4">Difficulty</th>
              </tr>
            </thead>
            <tbody>
              {lecture.problems.map((p, idx) => (
                <ProblemRow key={idx} problem={p} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function ProblemRow({ problem }) {
  const [checked, setChecked] = useState(problem.solved);
  const [star, setStar] = useState(false);

  return (
    <tr className="border-b border-gray-200">
      {/* Status Checkbox */}
      <td className="py-2 px-4">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          className="w-4 h-4"
        />
      </td>

      {/* Problem Name */}
      <td className="py-2 px-4 text-orange-600 cursor-pointer hover:underline">
        Solve {problem.name}
      </td>

      {/* Resource (Plus) */}
      <td className="py-2 px-4 text-center">
        <span className="bg-orange-500 px-2 py-1 rounded text-xs text-white">
          🎥
        </span>
      </td>

      {/* Resource (Free) */}
      <td className="py-2 px-4 text-center">
        <span className="bg-red-600 px-2 py-1 rounded text-xs text-white">
          ▶
        </span>
      </td>

      {/* Practice */}
      <td className="py-2 px-4 text-center">-</td>

      {/* Note */}
      <td className="py-2 px-4 text-center cursor-pointer">+</td>

      {/* Revision (Star) */}
      <td
        className="py-2 px-4 text-center cursor-pointer"
        onClick={() => setStar(!star)}
      >
        {star ? "⭐" : "☆"}
      </td>

      {/* Difficulty */}
      <td
        className={`py-2 px-4 font-medium ${
          problem.difficulty === "Easy"
            ? "text-green-600"
            : problem.difficulty === "Medium"
            ? "text-yellow-600"
            : "text-red-600"
        }`}
      >
        {problem.difficulty}
      </td>
    </tr>
  );
}
