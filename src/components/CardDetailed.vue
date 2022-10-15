<template>
  <div class="card">
    <Slider class="card__img" :slides="picture.slides"/>
    <div class="card__main">
      <h2 class="card__main-title">{{ picture.title }}</h2>
      <h2 class="card__main-description">{{ picture.description }}</h2>
    </div>
    <div class="card__footer"></div>
  </div>
</template>

<script>
export default {
  props: {
    picture: {
      type: [Object]
    }
  }
}
</script>

<style lang="scss" scoped>
  .card {
    &__img{}
    &__main{
      padding: 0 24px;
      margin-top: 20px;
      &-title{
        font-size: 18px;
        line-height: 27px;
      }
      &-description{
        margin-top: 20px;
      }
    }
    &__footer {
      margin-top: 40px;
    }
  }
</style>