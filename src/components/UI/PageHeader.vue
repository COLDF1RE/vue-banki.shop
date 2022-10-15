<template>
  <section class="page">
      <div class="page__inner">
        <h1 class="page__title">
          <slot></slot>
        </h1>
      </div>
  </section>
</template>

<script>
import Container from "../../components/UI/Container";
export default {
  components: {Container}
}
</script>

<style lang="scss" scoped>
  .page{
    &__inner{}
    &__title{
      font-size: 24px;
      line-height: 36px;
      font-weight: 700;
      padding: 45px 0 39px;
    }
  }
</style>