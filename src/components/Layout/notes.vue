<template>
  <div class="notes-container">
    <!-- Icon Row -->
    <div class="icon-row">
      <button class="icon-button">
        <i class='bx  bx-paperclip'  ></i>  
      </button>
      <button class="icon-button">
        <i class='bx  bx-phone-call'  ></i> 
      </button>
      <button class="icon-button">
       <i class='bx  bx-check-circle'  ></i> 
      </button>
      <button class="icon-button">
       <i class='bx  bx-calendar'  ></i> 
      </button>
    </div>

    <!-- Tab Navigation -->
    <div class="tabs">
      <button class="tab active">All</button>
      <button class="tab">Notes & Calls</button>
      <button class="tab">Tasks</button>
      <button class="tab">Meeting</button>
      <button class="tab">Files</button>
    </div>

    <!-- Notes List -->
    <div class="note-list">
     <NoteCard/>
        <NoteCard/>
        <NoteCard/>
    </div>
  </div>
</template>

<script setup lang="ts">
import NoteCard from './NoteCard.vue';

</script>

<style scoped lang="scss">
.notes-container {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* 🔵 Icon Row Styles */
.icon-row {
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
}

.icon-button {
  background-color: #eaf4ff;
  border: none;
  border-radius: 50%;
  padding: 0.75rem;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  i {
    width: 20px;
    height: 20px;
    font-size: 18px;
    color: #007bff;
  }

  &:hover {
    background-color: #d0e8ff;
  }
}

/* 📁 Tabs */
.tabs {
  display: flex;
  gap: 1rem;
  border-bottom: 1px solid #ddd;

  .tab {
    padding: 0.5rem 1rem;
    background: none;
    border: none;
    font-weight: 500;
    cursor: pointer;
    color: #555;

    &.active {
      border-bottom: 2px solid #007bff;
      color: #007bff;
    }
  }
}

.note-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>