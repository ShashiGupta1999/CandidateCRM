<template>
  <div class="tab-bar">
    <div
      v-for="tab in tabs"
      :key="tab"
      :class="['tab-item', { active: tab === activeTab }]"
      @click="setActiveTab(tab)"
    >
      {{ tab }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const tabs = [
  'All Details',
  'Assigned Jobs',
  'Related Emails',
  'Candidate Questions',
  'Motivations',
  'Related Deals',
  'Contacts/Attached'
]

const activeTab = ref('Assigned Jobs')

function setActiveTab(tab: string) {
  activeTab.value = tab
}
</script>

<style lang="scss" scoped>
.tab-bar {
  display: flex;
  background-color: #f0f2f5;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #dcdcdc;
  overflow-x: auto;
}

.tab-item {
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  font-weight: 500;
  font-size: 14px;
  color: #555;
  cursor: pointer;
  white-space: nowrap;
  transition: color 0.3s, border-bottom 0.3s;

  &.active {
    color: #007bff;
    border-bottom: 2px solid #007bff;
    background-color: #fff;
  }

  &:hover {
    color: #007bff;
  }
}

</style>