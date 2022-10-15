<template>
  <section class="slider">
    <div class="slider__inner">

      <div class="slider__img" v-for="slide in slides" :key="slide.id">
        <img class="slider__img-item" :src="slide.img" alt="picture">
        <MyButton class="slider__prev button--default" @click="prevSlide()">&#10094;</MyButton>
        <MyButton class="slider__next button--default" @click="nextSlide()">&#10095;</MyButton>
      </div>

      <div class="slider-nav">
        <div class="slider-nav__item" v-for="slide in slides" :key="slide.id" @click="currentSlide(slide.id)">
          <h3 class="slider-nav__item-title">{{ slide.title }}</h3>
          <h3 class="slider-nav__item-text">{{ slide.subtitle }}</h3>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import MyButton from "./MyButton";
export default {
  components: {MyButton},
  props: {
    slides: {
      type: [Array]
    }
  },
  data() {
    return {
      timer: 5000,
      slideIndex: 1,
    }
  },
  watch: {},
  mounted() {
    // this.sliderAutoPlay()
    this.showSlides(this.slideIndex)
  },
  methods: {
    // sliderAutoPlay() {
    //   const nextSlide = this.nextSlide
    //   setInterval(nextSlide, this.timer);
    // },
    // restartSlideAutoPlay() {
    //   const nextSlide = this.nextSlide
    //   clearInterval(this.sliderAutoPlay);
    //   this.sliderAutoPlay = setInterval(nextSlide,  this.timer);
    // },
    nextSlide() {
      this.showSlides(this.slideIndex += 1);
      // this.restartSlideAutoPlay()
    },
    prevSlide() {
      this.showSlides(this.slideIndex -= 1);
      // this.restartSlideAutoPlay()
    },
    currentSlide(n) {
      this.showSlides(this.slideIndex = n);
      // this.restartSlideAutoPlay()
    },
    showSlides(n) {
      const slides = document.querySelectorAll(".slider__img");
      const slidesNav = document.querySelectorAll(".slider-nav__item");
      if (n > slides.length) {
        this.slideIndex = 1
      }
      if (n < 1) {
        this.slideIndex = slides.length
      }
      for (let slide of slides) {
        slide.classList.remove("slider__img--active")
      }
      for (let nav of slidesNav) {
        nav.classList.remove("slider-nav__item--active")
      }
      slides[this.slideIndex - 1].classList.add("slider__img--active")
      slidesNav[this.slideIndex - 1].classList.add("slider-nav__item--active")
    }
  }
}
</script>

<style lang="scss" scoped>
.slider {
  &__inner {}
  &__img {
    animation-name: slider;
    animation-duration: 1.5s;
    display: none;
    position: relative;
    width: 440px;
    height: 250px;
    &--active {
      display: block;
    }
    &-item {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }
  &__prev,
  &__next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    transform: translateY(-50%);
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.2s ease;
    border-radius: 0 3px 3px 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
  &__next{
    right: 0;
    border-radius: 3px 0 0 3px;
  }
}

@keyframes slider {
  0%{
    opacity: .4
  }
  100% {
    opacity: 1
  }
}

.slider-nav{
  display: flex;
  flex-grow: 1;
  height: 85px;
  margin-bottom: 30px;
  cursor: pointer;
  &__item {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    background-color: #EFF8F7;
    color: #34ACA7;
    border-right: 1px solid #D6E6E6;
    &--active {
      background-color: #D9EFEC;
    }
    &:last-child {
      border-right: none;
    }
    &-title {
      font-weight: 400;
      font-size: 18px;
      line-height: 18px;
      margin-left: 20px;
    }
    &-text {
      font-style: italic;
      font-weight: 400;
      font-size: 10px;
      line-height: 19px;
      margin-left: 20px;
    }
  }
}
</style>