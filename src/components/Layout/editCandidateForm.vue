<template>
  <div class="modal">
    <form @submit.prevent="submit">
      <label>
        Name:
        <input v-model="form.name" required />
      </label>
      <label>
        Title:
        <input v-model="form.title" required />
      </label>
      <label>
        Location:
        <input v-model="form.country" required />
      </label>
      <label>
        City:
        <input v-model="form.city" required />
      </label>
      <button type="submit">Submit</button>
      <button type="button" @click="close">Cancel</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useCandidateStore } from '../../stores/candidate.ts'

const props = defineProps<{ show: boolean, close: () => void }>()
const store = useCandidateStore()
const form = ref({ ...store.candidate })

watch(() => props.show, (val) => {
  if (val) form.value = { ...store.candidate }
})

async function submit() {
  await store.updateCandidate(form.value)
  props.close()
}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}
form {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  min-width: 300px;
}
label {
  display: block;
  margin-bottom: 1rem;
}
input {
  width: 100%;
}
</style>