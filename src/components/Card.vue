<template>
  <div class="card" :class="{'card--sold': picture.currentPrice == 'Продана на аукционе'}">
    <img @click="$emit('openModal', picture)" class="card__img" :src="picture.image" alt="picture">
    <div class="card__main">
      <h2 @click="$emit('openModal', picture)" class="card__title">{{ picture.title }}</h2>
    </div>
    <div class="card__footer">
      <div class="card__price">
        <p class="card__price-old">{{ picture.oldPrice }}</p>
        <p class="card__price-current">{{ picture.currentPrice }}</p>
      </div>
      <MyButton @click="toggleCart" v-if="picture.currentPrice !== 'Продана на аукционе'" class="card__btn" :class="{'button--processing': isProcessing, 'button--cart': isCart, 'button--default': !isProcessing}">{{btnText}}</MyButton>
    </div>
  </div>
</template>

<script>
import MyButton from "./UI/MyButton";
import {mapActions, mapGetters} from "vuex";

export default {
  data() {
    return {
      isCart: false,
      isProcessing: false,
      btnText: 'Купить',
    }
  },
  components: {MyButton},
  props: {
    picture: [Object]
  },
  computed: {
    ...mapGetters(['cart'])
  },
  mounted() {
    this.toggleIsCart()
  },
  methods: {
    ...mapActions(['setCart']),
    openModal(picture) {
      this.$emit('currentPicture', picture)
    },
    toggleCart() {
      this.toggleProcessing()
      setTimeout(this.updateBtn, 2000)
    },
    toggleProcessing() {
      this.isProcessing = !this.isProcessing
      this.btnText = 'Обработ...'
    },
    updateBtn() {
      this.toggleProcessing()
      this.setCart(this.picture.id)
      this.toggleIsCart()
    },
    toggleIsCart(){
      if(this.cart.find((i) => i === this.picture.id)) {
        this.isCart = true
        this.btnText = 'В корзине'
      } else {
        this.isCart = false
        this.btnText = 'Купить'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  width: 280px;
  height: 328px;
  border: 1px solid #E7E7E7;
  &--sold {
    opacity: 0.5;
  }
  &__img {
    cursor: pointer;
    height: 160px;
    border-bottom: 1px solid #E7E7E7;
  }
  &__main {
    padding: 0 24px;
    margin-top: 20px;
  }
  &__title {
    cursor: pointer;
    font-size: 18px;
    line-height: 27px;
  }
  &__footer {
    margin-top: 22px;
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__price {
    &-old {
      font-size: 14px;
      line-height: 21px;
      font-weight: 300;
      text-decoration-line: line-through;
      color: #A0A0A0;
    }
    &-current {
      font-size: 16px;
      line-height: 24px;
      font-weight: 700;
    }
  }
  &__btn {}
}
</style>