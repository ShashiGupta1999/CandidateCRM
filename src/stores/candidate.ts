import { defineStore } from 'pinia'
import { fetchCandidateApi, updateCandidateApi } from '../api/candidateApi'

import type { Candidate } from '../../src/modal/candidateModal'
export const useCandidateStore = defineStore('candidate', {
state: () => ({
    candidate: {
      id: 1,
      name: '',
      title: '',
      country: '',
      city: '',
      email: '',
      phone: '',
      contactPerson: '',
      contactTime: '',
      organization: '',
      skills: '',
      availableFrom: '',
      currentSalary: '',
      noticePeriod: '',
      address: '',
      resume: '',
      totalExperience: '',
      summary: '',
      employmentStatus: '',
      dob: '',
      relevantExperience: '',
      salaryExpectation: '',
      status: '',
      salaryType: '',
      languageSkills: ''
    } as Candidate
  }),
actions: {
    async fetchCandidate() {
      const apiResult = await fetchCandidateApi(this.candidate.id)
      this.candidate = apiResult as Candidate
    },
    async updateCandidate(updated: Partial<Candidate>) {
      const apiResult = await updateCandidateApi(this.candidate.id, updated)
      this.candidate = { ...this.candidate, ...(apiResult || {}) }
    }
  }
})