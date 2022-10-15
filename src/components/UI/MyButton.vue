<template>
  <button class="button" v-on="$listeners">
    <slot></slot>
  </button>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.button {
  font-size: 14px;
  line-height: 21px;
  color: #F4F6F9;
  padding: 13px 30px;
  text-align: center;
  &--default {
    background-color: #403432;
    &:hover {
      background-color: #776763;
    }
    &:active {
      background-color: #6e5752;
    }
  }
  &--processing {
    position: relative;
    background-color: #5B3A32;
    padding: 13px 15px 13px 30px;
    &:hover {
      background-color: #776763;
    }
    &:active {
      background-color: #6e5752;
    }
    &:after{
      content: '';
      position: absolute;
      height: 16px;
      width: 16px;
      background-image: url("/static/icons/processing-icon.png");
      background-repeat: no-repeat;
      background-position: center;
      left: 9px;
      bottom: 16px;
    }
  }
  &--cart {
    position: relative;
    background-color: #5B3A32;
    padding: 13px 15px 13px 30px;
    &:hover {
      background-color: #776763;
    }
    &:active {
      background-color: #6e5752;
    }
    &:after{
      content: '';
      position: absolute;
      height: 16px;
      width: 16px;
      background-image: url("/static/icons/check-icon.png");
      background-repeat: no-repeat;
      background-position: center;
      left: 9px;
      bottom: 16px;
    }
  }
  &--disabled {
    cursor: default;
    background-color: #C1B4B1;
    pointer-events: none;
  }
}
</style>