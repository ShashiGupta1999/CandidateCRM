<template>
  <header class="topbar">
    <!-- Left: Search -->
    <div class="search">
      <input type="text" placeholder="Search Pipedrive" />
    </div>

    <!-- Center: Logo -->
    <div class="logo">
      <img src="/src/assets/images/logo.png" alt="Logo" />
      <span>recruit crm</span>
    </div>

    <!-- Right: Icons + Profile -->
    <div class="actions">
      <button class="icon primary"><i class="bx bx-plus"></i></button>
      <button class="icon"><i class="bx bx-envelope"></i></button>
      <button class="icon"><i class="bx bx-gift"></i></button>
      <button class="icon"><i class="bx bx-bell"></i></button>

      <div class="profile">
        <img src="/src/assets/images/user.png" alt="User" />
        <div class="info">
          <strong>Phyllis Ying</strong>
          <small>Senior Lead</small>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1.5rem;
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;

  .search {
    flex: 1;
    input {
      width: 100%;
      max-width: 250px;
      padding: 0.5rem 1rem;
      border: 1px solid #ddd;
      border-radius: 8px;
      font-size: 14px;
    }
  }

  .logo {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    font-weight: bold;
    font-size: 18px;
    color: #0052cc;

    img {
      width: 32px;
      height: 32px;
    }
  }

  .actions {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;

    .icon {
      background: none;
      border: 1px solid #ddd;
      border-radius: 50%;
      width: 36px;
      height: 36px;
      font-size: 16px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;

      i {
        color: #174a7c;
        font-size: 20px;
        stroke: #174a7c;
      }
    }
    .icon.primary {
      background-color: #174a7c;
      color: aliceblue;

      i {
        color: aliceblue;
      }
    }

    .profile {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-right: 1.5rem;

      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }

      .info {
        display: flex;
        flex-direction: column;
        font-size: 12px;
        line-height: 1.2;
      }
    }
  }
}
</style>
