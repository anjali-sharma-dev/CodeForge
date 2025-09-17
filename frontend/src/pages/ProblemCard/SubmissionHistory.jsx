import React, { useEffect, useState } from 'react'

const STORAGE_KEY_PREFIX = 'submission_history:'

const formatTime = (ts) => new Date(ts).toLocaleString()

const SubmissionHistory = ({ problemId }) => {
  const storageKey = `${STORAGE_KEY_PREFIX}${problemId}`
  const [submissions, setSubmissions] = useState([])

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey)
      if (raw) setSubmissions(JSON.parse(raw))
    } catch {}
  }, [storageKey])

  const clearHistory = () => {
    localStorage.removeItem(storageKey)
    setSubmissions([])
  }

  if (!submissions.length) {
    return (
      <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-semibold text-white">Submission History</h3>
        </div>
        <p className="text-xs text-[#b3b3b3]">No submissions yet.</p>
      </div>
    )
  }

  return (
    <div className="bg-[#1a1a1a] border border-[#3a1a1a] rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold text-white">Submission History</h3>
        <button onClick={clearHistory} className="text-xs text-[#ff375f] hover:underline">Clear</button>
      </div>
      <div className="space-y-2 max-h-48 overflow-auto pr-1">
        {submissions.map((s, i) => (
          <div key={i} className="border border-[#3a3a3a] rounded-md p-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#b3b3b3]">{formatTime(s.timestamp)}</span>
              <span className={s.status === 'Accepted' ? 'text-[#00b8a3]' : 'text-[#ff375f]'}>{s.status}</span>
            </div>
            <div className="mt-1 text-xs text-[#b3b3b3] truncate">{s.language.toUpperCase()}</div>
            {s.message && <div className="mt-1 text-xs text-[#b3b3b3] whitespace-pre-wrap">{s.message}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}

export const pushSubmission = ({ problemId, language, status, message }) => {
  const storageKey = `${STORAGE_KEY_PREFIX}${problemId}`
  const entry = { timestamp: Date.now(), language, status, message }
  try {
    const raw = localStorage.getItem(storageKey)
    const list = raw ? JSON.parse(raw) : []
    list.unshift(entry)
    localStorage.setItem(storageKey, JSON.stringify(list.slice(0, 50)))
  } catch {}
}

export default SubmissionHistory


