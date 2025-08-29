<script setup lang="ts">
import CandidateContent from "./components/Layout/CandidateContent.vue";
import sidebar from "./components/Layout/sidebar.vue";
import topbar from "./components/Layout/topbar.vue";
</script>

<template>
  <div class="main-container">
    <sidebar class="sidebar" />
    <topbar class="topbar"/>
<div class="content">
    <CandidateContent/>
</div>
  </div>
</template>

<style scoped lang="scss">
.main-container {
  width: 100vw;
  height: 100vh;
  min-width: 320px;
  min-height: 100vh;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 56px 1fr;
  grid-template-rows: 56px 1fr;
  grid-template-areas:
    "sidebar topbar"
    "sidebar content";

  @media (max-width: 900px) {
    grid-template-columns: 56px 1fr;
  grid-template-rows: 56px 1fr;
  grid-template-areas:
    "sidebar topbar"
    "sidebar content";
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: 48px 48px 1fr;
    grid-template-areas:
      "topbar"
      "sidebar"
      "content";
    .sidebar {
      grid-area: sidebar;
      width: 100%;
      border-right: none;
      border-bottom: 1px solid #ddd;
      display: flex;
      flex-direction: row;
      height: 48px;
      align-items: center;
      justify-content: center;
    }
     .topbar {
      grid-area: topbar;
      width: 100%;
    }
    .content {
      grid-area: content;
      width: 100%;
    }
  }
}
.sidebar {
    grid-area: sidebar;
    
    border-right: 1px solid #ddd;
  }

  .topbar {
    grid-area: topbar;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    
    width: 100%;
  }
  .content {
    grid-area: content;
    width: 100%;
    overflow-y: auto;
    background-color: #fafafa;
  }


</style>
