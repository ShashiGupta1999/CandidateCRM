<template>
  <div class="breadcrumb-container">
    <div class="breadcrumb-left">
      <router-link to="/candidates" class="link">Candidates</router-link>
      <span class="separator">›</span>
      <span class="text">Robert Hardy</span>
      <span class="separator">›</span>
      <span class="text">ID - 231</span>
    </div>

    <div class="breadcrumb-right">
      <button class="btn primary">Request Profile Update</button>
      <button class="btn">Previous</button>
      <button class="btn">Next</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.breadcrumb-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 24px ;
  border-bottom: 1px solid #e0e0e0;
  font-size: 14px;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.breadcrumb-left {
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .link {
    color: #0077cc;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }

  .separator {
    color: #999;
  }

  .text {
    color: #333;
  }
}

.breadcrumb-right {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;

  .btn {
    padding: 0.4rem 0.8rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    background-color: #fff;
    cursor: pointer;
    font-size: 13px;

    &:hover {
      background-color: #f0f0f0;
    }

    &.primary {
      border-color: #0077cc;
      background-color: #e6f2ff;
      color: #0077cc;
      font-weight: 500;
    }
  }
}
</style>