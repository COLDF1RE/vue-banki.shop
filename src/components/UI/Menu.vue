<template>
  <div :class="menuActive ? 'menu menu--active' : 'menu'">
    <ul class="menu__list">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    menuActive: {
      type: Boolean,
      required: true,
    }
  },
}
</script>

<style lang="scss" scoped>
.menu {
  position: absolute;
  z-index: 1;
  display: none;
  &--active {
    display: block;
  }
}
</style>