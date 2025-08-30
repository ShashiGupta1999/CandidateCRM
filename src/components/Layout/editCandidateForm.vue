<template>
  <div class="modal">
    <form @submit.prevent="submit">
      <div class="form-actions">
        <button type="submit">Save</button>
        <button type="button" @click="close">Cancel</button>
      </div>
      <h2>Edit Candidate Details</h2>
      <div v-if="errorMsg" class="error-msg">{{ errorMsg }}</div>
      <div class="form-section">
        <h3>Basic Info</h3>
        <label>Name: <input v-model="form.name" required /></label>
        <label>Title: <input v-model="form.title" required /></label>
        <label>Country: <input v-model="form.country" required /></label>
        <label>City: <input v-model="form.city" required /></label>
      </div>
      <div class="form-section">
        <h3>Contact Details</h3>
        <label>Email: <input v-model="form.email" type="email" required /></label>
        <div v-if="emailError" class="field-error">{{ emailError }}</div>
        <label>Phone: <input v-model="form.phone" required /></label>
        <div v-if="phoneError" class="field-error">{{ phoneError }}</div>
        <label>Contact Person: <input v-model="form.contactPerson" /></label>
        <label>Contact Time: <input v-model="form.contactTime" /></label>
      </div>
      <div class="form-section">
        <h3>Skill Details</h3>
        <label>Organization: <input v-model="form.organization" /></label>
        <label>Skills: <input v-model="form.skills" /></label>
        <label>Available From: <input v-model="form.availableFrom" type="date" /></label>
        <label>Current Salary: <input v-model="form.currentSalary" /></label>
        <label>Notice Period: <input v-model="form.noticePeriod" /></label>
        <label>Address: <input v-model="form.address" /></label>
        <label>Resume: <input v-model="form.resume" /></label>
        <label>Total Experience: <input v-model="form.totalExperience" /></label>
        <label>Summary: <textarea v-model="form.summary" rows="2"></textarea></label>
        <label>Employment Status: <input v-model="form.employmentStatus" /></label>
        <label>Date of Birth: <input v-model="form.dob" type="date" /></label>
        <label>Relevant Experience: <input v-model="form.relevantExperience" /></label>
        <label>Salary Expectation: <input v-model="form.salaryExpectation" /></label>
        <label>Status: <input v-model="form.status" /></label>
        <label>Salary Type: <input v-model="form.salaryType" /></label>
        <label>Language Skills: <input v-model="form.languageSkills" /></label>
      </div>
      <div class="form-actions">
        <button type="submit">Save</button>
        <button type="button" @click="close">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useCandidateStore } from '../../stores/candidate.ts'

const props = defineProps<{ show: boolean, close: () => void }>()
const store = useCandidateStore()
const form = ref({ ...store.candidate })
const errorMsg = ref('')
const emailError = ref('')
const phoneError = ref('')

watch(() => props.show, (val) => {
  if (val) form.value = { ...store.candidate }
  emailError.value = ''
  phoneError.value = ''
})

function validateFields() {
  let valid = true
  emailError.value = ''
  phoneError.value = ''

  // Email validation
  if (!/^[^@\s]+@gmail\.com$/.test(form.value.email)) {
    emailError.value = 'Email must be in the format username@gmail.com'
    valid = false
  }

  // Phone validation
  if (!/^\+\d{1,3}\d{10}$/.test(form.value.phone)) {
    phoneError.value = 'Phone must start with country code and have 10 digits (e.g., +911234567890)'
    valid = false
  }

  return valid
}

async function submit() {
  errorMsg.value = ''
  if (!validateFields()) return
  try {
    await store.updateCandidate(form.value)
    props.close()
  } catch (err) {
    errorMsg.value = 'Failed to update candidate. Please try again.'
  }
}

</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

form {
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  min-width: 350px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);
  width: 100%;
  max-width: 600px;
}

h2 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #222;
}

.error-msg {
  color: #d93025;
  background: #fdecea;
  border: 1px solid #f5c6cb;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  font-size: 1rem;
  text-align: center;
}
.field-error {
  color: #d93025;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
  margin-top: -0.5rem;
  padding-left: 0.2rem;
}

.form-section {
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
}

.form-section h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #0073e6;
}

label {
  display: block;
  margin-bottom: 0.7rem;
  font-size: 0.98rem;
  color: #333;
}

input,
textarea {
  width: 100%;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  margin-top: 0.2rem;
  font-size: 1rem;
  background: #f9f9f9;
  transition: border 0.2s;
}

input:focus,
textarea:focus {
  border-color: #0073e6;
  outline: none;
}

.form-actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1.5rem;
}

button[type="submit"] {
  background: #0073e6;
  color: #fff;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s;
}

button[type="submit"]:hover {
  background: #005bb5;
}

button[type="button"] {
  background: #eee;
  color: #333;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s;
}

button[type="button"]:hover {
  background: #ccc;
}
</style>