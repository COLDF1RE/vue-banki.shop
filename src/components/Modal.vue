<template>
  <div class="modal modal--active" v-if="show" @click.self="closeModal">
    <div class="modal__window">
      <slot></slot>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    modalVisible: {
      type: Boolean,
    },
    test: {
      type: Boolean,
    }
  },
  mounted() {
    window.addEventListener('keydown', this.escCloseModal);
  },
  destroy() {
    window.removeEventListener('keydown', this.escCloseModal);
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    escCloseModal(e) {
      if (this.show && e.key === 'Escape') {
        this.closeModal();
      }
    },
  },
}
</script>


<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(181, 181, 181, 0.35);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(0);
  z-index: 10;
  &--active {
    transform: scale(1);
  }
  &__window {
    background-color: #ffffff;
    max-width: 440px;
    width: 100%;
  }
}
</style>