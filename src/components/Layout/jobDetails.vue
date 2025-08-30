<template>
  <div class="job-details">
    <div class="header">
      <h2>Assigned Job to {{ candidateName }}</h2>
      <div class="actions">
        <button class="primary">Assign To Job</button>
        <button class="secondary">View All Assigned Jobs</button>
      </div>
    </div>

    <div class="job-card" v-for="(job, index) in jobs" :key="index">
      <div class="avatar">M</div>
      <div class="info">
        <h3>{{ job.title }}</h3>
        <p>{{ job.company }}</p>
        <div class="meta">
          <span class="name">{{ job.assignedTo }}</span>
          <span class="date">{{ job.date }}</span>
        </div>
      </div>
      <div class="status">{{ job.status }}</div>
      <button class="view-files">View Files</button>
      <label class="toggle">
        <input type="checkbox" v-model="job.enabled" />
        <span class="slider"></span>
      </label>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const candidateName = 'William Sample'

const jobs = ref([
  {
    title: 'Senior Product Manager',
    company: 'Recruit CRM',
    assignedTo: 'William Sample',
    date: 'Jul 10, 2023',
    status: 'Assigned',
    enabled: true
  },
   {
    title: 'Senior Software Engineer',
    company: 'HCLTECH',
    assignedTo: 'Shashi Gupta',
    date: 'Jul 10, 2024',
    status: 'Assigned',
    enabled: true
  },
   {
    title: 'Senior Product Owner',
    company: 'Recruit CRM',
    assignedTo: 'William Becker',
    date: 'Jul 10, 2025',
    status: 'Assigned',
    enabled: true
  }
])
</script>

<style lang="scss" scoped>
.job-details {
  padding: 1rem;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    h2 {
      font-size: 1.2rem;
      font-weight: 600;
    }

    .actions {
      button {
        margin-left: 0.5rem;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 4px;
        font-weight: 500;
        cursor: pointer;

        &.primary {
          background-color: #007bff;
          color: #fff;
        }

        &.secondary {
          background-color: #f0f0f0;
          color: #333;
        }
      }
    }
  }

  .job-card {
    display: flex;
    align-items: center;
    background: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1rem;

    .avatar {
      background-color: #f4a261;
      color: #fff;
      font-weight: bold;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 1rem;
    }

    .info {
      flex: 1;

      h3 {
        margin: 0;
        font-size: 1rem;
        font-weight: 600;
      }

      p {
        margin: 0.2rem 0;
        color: #777;
      }

      .meta {
        display: flex;
        gap: 1rem;
        font-size: 0.85rem;
        color: #555;
      }
    }

    .status {
      margin-right: 1rem;
      font-weight: 500;
      color: #555;
    }

    .view-files {
      margin-right: 1rem;
      padding: 0.4rem 0.8rem;
      background-color: #f0f0f0;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    .toggle {
      position: relative;
      width: 40px;
      height: 20px;

      input {
        opacity: 0;
        width: 0;
        height: 0;
      }

      .slider {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        border-radius: 20px;
        transition: 0.4s;

        &::before {
          content: "";
          position: absolute;
          height: 16px;
          width: 16px;
          left: 2px;
          bottom: 2px;
          background-color: white;
          border-radius: 50%;
          transition: 0.4s;
        }
      }

      input:checked + .slider {
        background-color: #007bff;

        &::before {
          transform: translateX(20px);
        }
      }
    }
  }
}

</style>