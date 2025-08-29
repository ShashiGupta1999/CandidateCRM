<template>
  <div class="note-card">
    <div class="note-header">
      <span class="badge">📝 Note</span>
      <span class="status">To Do</span>
    </div>
    <p class="note-text">
      Lorem dolore sit et aute cupidatat eu Lorem tempor proident consequat...
    </p>
    <a class="link">1 Association(s)</a>
    <div class="note-footer">
      <span class="author">👤 John Doe</span>
      <span class="timestamp">📅 Jul 12, 2023, 11:54 am</span>
    </div>
  </div>
</template>

<script setup lang="ts">
// You can pass props later for dynamic content
</script>

<style scoped lang="scss">
.note-card {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.note-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .badge {
    background-color: #eaf4ff;
    color: #007bff;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 600;
  }

  .status {
    background-color: #f0f0f0;
    color: #333;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 12px;
  }
}

.note-text {
  font-size: 14px;
  color: #444;
}

.link {
  font-size: 13px;
  color: #007bff;
  text-decoration: underline;
  cursor: pointer;
}

.note-footer {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #666;
}
</style>