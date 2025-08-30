<template>
  <div class="contact-details">
    <!-- Left Side -->
    <div class="left">
      <div class="detail">
        <i class="bx bx-envelope"></i>
        <a :href="`mailto:${store.candidate.email}`">{{ store.candidate.email }}</a>
      </div>
      <div class="detail">
        <i class="bx bx-phone"></i>
        <a :href="`tel:${store.candidate.phone}`">{{ store.candidate.phone }}</a>
      </div>
    </div>

    <!-- Right Side -->
    <div class="right">
      <div class="detail">
        <i class="bx bx-user"></i>
        <span>{{ store.candidate.contactPerson }}</span>
      </div>
      <div class="detail">
        <i class="bx bx-time"></i>
        <span>{{ store.candidate.contactTime }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCandidateStore } from '../../stores/candidate.ts'
const store = useCandidateStore()
</script>

// ...existing style...

<style scoped lang="scss">
.contact-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  flex-wrap: wrap;
  font-size: 14px;
  color: #333;
   background-color: #fff;
   padding: 8px;
    border-bottom: 1px solid #eee;

  .left,
  .right {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .detail {
    display: flex;
    align-items: center;
    gap: 0.4rem;
   

    i {
      font-size: 16px;
      color: #666;
    }

    a {
      color: #0073e6;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    span {
      color: #444;
    }
  }
}
</style>