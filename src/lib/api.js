const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000'

export const fetchProblems = async () => {
  const res = await fetch(`${API_BASE}/api/problems`)
  if (!res.ok) throw new Error('Failed to load problems')
  return res.json()
}

export const fetchProblem = async (id) => {
  const res = await fetch(`${API_BASE}/api/problems/${id}`)
  if (!res.ok) throw new Error('Problem not found')
  return res.json()
}

export const runCodeApi = async ({ language, code, input }) => {
  const res = await fetch(`${API_BASE}/api/run`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ language, code, input })
  })
  if (!res.ok) throw new Error('Run failed')
  return res.json()
}

export const submitCodeApi = async ({ problemId, language, lastOutput }) => {
  const res = await fetch(`${API_BASE}/api/submit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ problemId, language, lastOutput })
  })
  if (!res.ok) throw new Error('Submit failed')
  return res.json()
}

export const fetchLeaderboard = async () => {
  const res = await fetch(`${API_BASE}/api/leaderboard`)
  if (!res.ok) throw new Error('Failed to load leaderboard')
  return res.json()
}

export const fetchProgress = async () => {
  const res = await fetch(`${API_BASE}/api/progress`)
  if (!res.ok) throw new Error('Failed to load progress')
  return res.json()
}


