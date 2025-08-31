<template>
  <div class="tab-bar">
    <button class="tab-item">All Details</button>
    <button class="tab-item active">Assigned Jobs</button>
    <button class="tab-item">Related Emails</button>
    <button class="tab-item">Candidate Questions</button>
    <button class="tab-item">Motivations</button>
    <button class="tab-item">Related Deals</button>

  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.tab-bar {
display: flex;
background-color: #f0f2f5;
padding: 0.5rem 1rem;
border-bottom: 1px solid #dcdcdc;
overflow: auto;
}

.tab-item {
padding: 0.5rem 1rem;
margin-right: 1rem;
font-weight: 400;
font-size: 14px;
color: #555;
background: none;
border: none;
cursor: pointer;
white-space: nowrap;
transition: color 0.3s, border-bottom 0.3s;

&.active {
color: #007bff;
border-bottom: 2px solid #007bff;
background-color: #fff;
font-weight: bold;
}

&:hover {
color: #007bff;
background-color: #eaf4ff;
}
}


</style>