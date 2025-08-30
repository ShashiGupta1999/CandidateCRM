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
  height: 100vh;
  background-color: #174a7c;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start; // Align sidebar to the left
  z-index: 99;
 margin: 0;
 padding: 0;
  border-right: 2px solid #fff;
  position: fixed;            // Make sidebar fixed to the left
  top: 0;
  left: 0;

 @media (max-width: 600px) {
    flex-direction: row !important;
    width: 100vw !important;
    height: 48px !important;
    
    justify-content: center !important;
    border-right: none !important;
    border-bottom: 1px solid #fff !important;

   @media (max-width: 430px) {
    position: fixed !important;
    top: 56px !important; // Height of your topbar (adjust if needed)
    left: 0 !important;
    width: 100vw !important;
    height: 48px !important;
    flex-direction: row !important;
    align-items: center !important;
    justify-content: center !important;
    border-right: none !important;
    border-bottom: 1px solid #fff !important;
    z-index: 99 !important;
    padding: 0 !important;
    margin: 0 !important;
   }
    nav ul {
      flex-direction: row !important;
      width: 100vw !important;
      li {
        width: 48px !important;
        height: 48px !important;
        font-size: 1.5rem !important;
        justify-content: center !important ;
        align-items: center !important ;
      
      
      }
    }
    
 }
 
  nav {
    width: 100%;
    height: 100%;
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
       padding: 0 !important;
      margin: 0 !important;

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
         padding: 0 !important;
      margin: 0 !important;

        i {
        height: 48px;
        width: 50px;
      }
      }
    }
  }
}

</style>
