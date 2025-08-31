import { fetchCandidateApi, updateCandidateApi } from '../src/api/candidateApi'

// Mock fetch globally
const globalAny: any = globalThis

describe('candidateApi', () => {
  beforeEach(() => {
    globalAny.fetch = jest.fn()
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('fetchCandidateApi returns candidate data on success', async () => {
    const mockCandidate = { id: 1, name: 'John Doe', email: 'john@example.com' }
    globalAny.fetch.mockResolvedValue({
      ok: true,
      json: async () => mockCandidate
    })
    const result = await fetchCandidateApi(1)
    expect(result).toEqual(mockCandidate)
    expect(globalAny.fetch).toHaveBeenCalledWith('http://localhost:3000/candidate/1')
  })

  it('fetchCandidateApi throws error on failure', async () => {
    globalAny.fetch.mockResolvedValue({ ok: false })
    await expect(fetchCandidateApi(1)).rejects.toThrow('Failed to fetch candidate')
  })

  it('updateCandidateApi returns updated candidate data on success', async () => {
    const updated = { name: 'Jane Doe' }
    const mockCandidate = { id: 1, name: 'Jane Doe', email: 'jane@example.com' }
    globalAny.fetch.mockResolvedValue({
      ok: true,
      json: async () => mockCandidate
    })
    const result = await updateCandidateApi(1, updated)
    expect(result).toEqual(mockCandidate)
    expect(globalAny.fetch).toHaveBeenCalledWith('http://localhost:3000/candidate/1', expect.objectContaining({
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated)
    }))
  })

  it('updateCandidateApi throws error on failure', async () => {
    globalAny.fetch.mockResolvedValue({ ok: false })
    await expect(updateCandidateApi(1, { name: 'Jane Doe' })).rejects.toThrow('Failed to update candidate')
  })
})
