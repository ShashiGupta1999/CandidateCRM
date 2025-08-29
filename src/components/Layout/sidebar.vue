<template>
  <aside class="sidebar">
   
    <nav>
      <ul>
        <li><i class='bx  bx-grid'  ></i> </li>
        <li><i class='bx  bx-user-circle'  ></i> </li>
        <li><i class='bx  bx-envelope-open'  ></i> </li>
        <li><i class='bx  bx-calendar-alt'  ></i> </li>
        <li><i class='bx  bx-cog'  ></i> </li>
        <li><i class='bx  bx-dollar-circle'  ></i> </li>
        <li><i class='bx  bx-briefcase-alt-2' ></i> </li>
        <li><i class='bx  bx-dots-horizontal-rounded'  ></i> </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.sidebar {
  width: 56px;
  height: 982px;
  background-color: #174a7c;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start; // Align sidebar to the left

  border-right: 2px solid #fff;
  position: relative;

 

  nav {
    width: 100%;
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      align-items: center;

      li {
       
        font-size: 2rem;
        cursor: pointer;
        width: 56px;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        transition: background 0.2s;
        

        i {
        height: 48px;
        width: 50px;
      }
      }
    }
  }
}
</style>
