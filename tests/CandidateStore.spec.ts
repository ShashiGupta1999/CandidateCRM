import { setActivePinia, createPinia } from 'pinia'
import { useCandidateStore } from '../src/stores/candidate'

// Mock API functions using Jest
jest.mock('../src/api/candidateApi', () => ({
  fetchCandidateApi: jest.fn().mockResolvedValue({
    id: 1,
    name: 'John Doe',
    email: 'john@example.com'
 
  }),
  updateCandidateApi: jest.fn().mockResolvedValue({
    id: 1,
    name: 'Jane Doe',
    email: 'jane@example.com'
   
  })
}))

describe('Candidate Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('fetches candidate and updates store', async () => {
    const store = useCandidateStore()
    await store.fetchCandidate()
    expect(store.candidate.name).toBe('John Doe')
    expect(store.candidate.email).toBe('john@example.com')
  })

  it('updates candidate and updates store', async () => {
    const store = useCandidateStore()
    await store.updateCandidate({ name: 'Jane Doe', email: 'jane@example.com' })
    expect(store.candidate.name).toBe('Jane Doe')
    expect(store.candidate.email).toBe('jane@example.com')
  })
})
