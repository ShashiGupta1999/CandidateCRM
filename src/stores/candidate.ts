import { defineStore } from 'pinia'
import { fetchCandidateApi, updateCandidateApi } from '../api/candidateApi'

export interface Candidate {
  id: number
  name: string
  title: string
  country: string
  city: string
  // ...other fields
}
export const useCandidateStore = defineStore('candidate', {
  state: () => ({
    candidate: {
      id: 1,
      name: 'William Sample',
      title: 'Senior Product Manager',
      country: 'United States',
      city: 'Dallas',
      // ...other fields
    } as Candidate
  }),
  actions: {
   async fetchCandidate() {
      const apiResult = await fetchCandidateApi()
      this.candidate = apiResult as Candidate
    },
    async updateCandidate(updated: Partial<Candidate>) {
  const apiResult = await updateCandidateApi(updated)
  this.candidate = { ...this.candidate, ...(apiResult || {}) }
}
  }
})