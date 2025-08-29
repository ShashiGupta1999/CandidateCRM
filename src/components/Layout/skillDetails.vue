<template>
  <div class="skill-details">
    <!-- Left Column -->
    <div class="column">
      <div class="detail">
        <strong>Current Organization:</strong> World Bank Group
      </div>
      <div class="detail"><strong>Skills:</strong> HTML, CSS, Javascript</div>
      <div class="detail"><strong>Available From:</strong> Jul 14, 2023</div>
      <div class="detail"><strong>Current Salary:</strong> $6000</div>
      <div class="detail"><strong>Notice Period:</strong> 90 Days</div>
      <div class="detail">
        <strong>Full Address:</strong> 9400 Ashton Rd, Philadelphia...
      </div>
      <div class="detail"><strong>Resume:</strong> Resume</div>
      <div class="detail"><strong>Total Experience:</strong> 5 Years</div>
    </div>

    <!-- Right Column -->
    <div class="column">
      <div class="detail"><strong>Summary:</strong></div>
      <div class="detail">
        <strong>Current Employment Status:</strong> Employed
      </div>
      <div class="detail"><strong>Date of Birth:</strong> 15 June 1993</div>
      <div class="detail"><strong>Relevant Experience:</strong> 7 Years</div>
      <div class="detail"><strong>Salary Expectation:</strong> $9000</div>
      <div class="detail"><strong>Status:</strong> Submitted to Client</div>
      <div class="detail"><strong>Salary Type:</strong> Annual</div>
      <div class="detail">
        <strong>Language Skills:</strong> English (Elementary proficiency)
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// You can pass props later for dynamic rendering
</script>

<style scoped lang="scss">
.skill-details {
  display: flex;
  gap: 2rem;
  padding: 1rem;
  flex-wrap: wrap;
  background-color: #fff;

  .column {
    flex: 1;
    min-width: 280px;
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
