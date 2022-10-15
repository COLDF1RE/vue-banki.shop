<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
  .container {
    max-width: 1246px;
    margin: 0 auto;
    padding: 0 15px;
  }
  @media (max-width: 400px) {
    .container {
      padding: 0 10px;
    }
  }
</style>