import React from 'react'

const TestcasePanel = ({ customInput, setCustomInput, output }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div>
        <label className="block text-xs text-[#b3b3b3] mb-1">Custom Input</label>
        <textarea
          value={customInput}
          onChange={(e) => setCustomInput(e.target.value)}
          className="w-full h-24 bg-[#0a0a0a] text-white text-sm font-mono resize-none focus:outline-none border border-[#3a3a3a] rounded-md p-3"
          placeholder="e.g. nums=[2,7,11,15], target=9"
        />
      </div>
      <div>
        <label className="block text-xs text-[#b3b3b3] mb-1">Output</label>
        <pre className="w-full h-24 bg-[#0a0a0a] text-white text-sm font-mono overflow-auto border border-[#3a3a3a] rounded-md p-3 whitespace-pre-wrap">{output || '—'}</pre>
      </div>
    </div>
  )
}

export default TestcasePanel


