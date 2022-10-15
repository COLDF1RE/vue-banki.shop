<template>
  <input :value="value" @input="updateInput" type="text" class="input" >
</template>

<script>
export default {
  props: {
    value: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  border: 1px solid #E1E1E1;
  width: 100%;
  height: 48px;
  font-size: 14px;
  line-height: 21px;
  padding: 13px 16px;
  &:hover {
    box-shadow: inset 0 0 1px 1px #E1E1E1;
  }
  &::placeholder{
    color: #9F9F9F;
  }
  &:focus{
    outline: none;
    border: 1px solid #B5B5B5
  }
}
</style>