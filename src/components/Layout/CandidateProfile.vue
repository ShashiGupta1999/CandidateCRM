<template>
  <div class="candidate-profile">
    <!-- Left: Avatar -->
    <div class="avatar">
      <img src="/src/assets/images/profile.png" alt="Candidate" />
    </div>

    <!-- Middle: Info -->
    <div class="info">
      <h2>{{store.candidate.name}}</h2>
      <div class="meta">
        <span>{{store.candidate.title}}</span>
        <span>{{store.candidate.country}}</span>
        <span>{{ store.candidate.city }}</span>
      </div>
    </div>

    <!-- Right: Status + Actions -->
    <div class="actions">
      <span class="tag linked">Contact Linked</span>
      <i class="bx bx-star icon"></i>
      <i class="bx bx-bell icon"></i>
      <i class="bx bx-edit icon" @click="openEdit"></i>
      <i class="bx  bx-dots-vertical icon" ></i> 
    </div>
     <EditCandidateForm :show="showEdit" :close="closeEdit" v-if="showEdit" />
  </div>
</template>

<script setup lang="ts">
import { useCandidateStore } from '../../stores/candidate.ts'
import { useEditModal } from '../../composable/useEditModel.ts'
import EditCandidateForm from './editCandidateForm.vue'

const store = useCandidateStore()

const { showEdit, open, close } = useEditModal()
const openEdit = open
const closeEdit = close
</script>

<style scoped lang="scss">
.candidate-profile {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.05);
  gap: 1rem;
  flex-wrap: wrap;
  border-bottom: 1px solid #eee;
}

.avatar img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

.info {
  flex: 1;
  min-width: 200px;

  h2 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
  }

  .meta {
    display: flex;
    gap: 1rem;
    font-size: 14px;
    color: #555;
    margin-top: 0.25rem;
  }
}

.actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;

  .tag {
    padding: 0.3rem 0.6rem;
    border-radius: 6px;
    font-size: 13px;
    background-color: #fdecea;
    color: #d93025;
    border: 1px solid #f5c6cb;

    &.linked {
      font-weight: 500;
    }
  }

  .icon {
    font-size: 18px;
    padding: 6px;
    border: 1px solid #ccc;
    border-radius: 50%;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background-color: #f0f0f0;
    }
  }
}
</style>