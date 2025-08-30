<template>
  <div class="skill-details">
    <!-- Left Column -->
    <div class="column">
      <div class="detail">
        <strong>Current Organization:</strong> {{ store.candidate.organization }}
      </div>
      <div class="detail"><strong>Skills:</strong> {{ store.candidate.skills }}</div>
      <div class="detail"><strong>Available From:</strong> {{ store.candidate.availableFrom }}</div>
      <div class="detail"><strong>Current Salary:</strong> {{ store.candidate.currentSalary }}</div>
      <div class="detail"><strong>Notice Period:</strong> {{ store.candidate.noticePeriod }}</div>
      <div class="detail">
        <strong>Full Address:</strong> {{ store.candidate.address }}
      </div>
      <div class="detail"><strong>Resume:</strong> {{ store.candidate.resume }}</div>
      <div class="detail"><strong>Total Experience:</strong> {{ store.candidate.totalExperience }}</div>
    </div>

    <!-- Right Column -->
    <div class="column">
      <div class="detail"><strong>Summary:</strong> {{ store.candidate.summary }}</div>
      <div class="detail">
        <strong>Current Employment Status:</strong> {{ store.candidate.employmentStatus }}
      </div>
      <div class="detail"><strong>Date of Birth:</strong> {{ store.candidate.dob }}</div>
      <div class="detail"><strong>Relevant Experience:</strong> {{ store.candidate.relevantExperience }}</div>
      <div class="detail"><strong>Salary Expectation:</strong> {{ store.candidate.salaryExpectation }}</div>
      <div class="detail"><strong>Status:</strong> {{ store.candidate.status }}</div>
      <div class="detail"><strong>Salary Type:</strong> {{ store.candidate.salaryType }}</div>
      <div class="detail">
        <strong>Language Skills:</strong> {{ store.candidate.languageSkills }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCandidateStore } from '../../stores/candidate.ts'
const store = useCandidateStore()
</script>

<style scoped lang="scss">

.skill-details {
  display: flex;
  gap: 2rem;
  padding: 1rem;
  flex-wrap: wrap;
  background-color: #fff;
  margin-bottom: 1rem;
  height: 300px;
  .column {
   flex: 1;
   height: 100%;
   
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .detail {
    font-size: 14px;
    color: #333;
    padding-bottom: 0.5rem;

    strong {
      font-weight: 600;
      margin-right: 0.5rem;
      color: #222;
    }
  }
}




</style>