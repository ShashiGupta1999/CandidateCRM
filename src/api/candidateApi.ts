import type { Candidate } from '../../src/modal/candidateModal'

const BASE_URL = 'http://localhost:3000/candidate'

export async function fetchCandidateApi(id = 1): Promise<Candidate> {
  const response = await fetch(`${BASE_URL}/${id}`)
  if (!response.ok) throw new Error('Failed to fetch candidate')
  return await response.json()
}

export async function updateCandidateApi(id: number, updated: Partial<Candidate>): Promise<Candidate> {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updated)
  })
  if (!response.ok) throw new Error('Failed to update candidate')
  return await response.json()
}