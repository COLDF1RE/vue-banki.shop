<template>
  <section class="catalog">
    <Container>
      <div class="catalog__inner">
        <PageHeader class="catalog__title">Картины эпохи Возрождения</PageHeader>
          <div class="catalog__cards">
            <Loading class="catalog__loading" v-if="loading"/>
            <Card @click="isShowModal" class="catalog__cards-item" v-if="!loading && pictures"
                  v-for="picture in searchedPictures" :key="picture.id" :picture="picture"
                  @openModal="getCurrentPicture"/>
            <EmptyList v-if="!loading && !searchedPictures.length"/>
          </div>
      </div>
    </Container>

    <Modal v-if="isShowModal" v-show="isShowModal" :show="isShowModal" @close="toggleModal">
      <CardDetailed :picture="currentPicture"/>
    </Modal>
  </section>
</template>

<script>
import Container from "../components/UI/Container";
import PageHeader from "../components/UI/PageHeader";
import Card from "../components/Card";
import Pagination from "../components/UI/Pagination";
import MyButton from "../components/UI/MyButton";
import {mapGetters} from "vuex";
import Loading from "../components/UI/Loading";
import EmptyList from "../components/EmptyList";
import Modal from "../components/Modal";
import CardDetailed from "../components/CardDetailed";

export default {
  components: {CardDetailed, Modal, EmptyList, Loading, MyButton, Pagination, Card, PageHeader, Container},
  data() {
    return {
      loading: false,
      isShowModal: false,
      currentPicture: '',
      pictures: [
        {
          id: 1,
          title: '«Рождение Венеры» Сандро Боттичелли',
          currentPrice: '1 000 000 $',
          oldPrice: '2 000 000 $',
          image: '../static/images/picture-1.jpg',
          description: '1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, dolore?',
          slides: [
            {id: 1, img: '../static/images/picture-1.jpg', title: 'Слайд 1', subtitle: 'Описание 1'},
            {id: 2, img: '../static/images/picture-1-1.jpeg', title: 'Слайд 2', subtitle: 'Описание 2'},
            {id: 3, img: '../static/images/picture-1-2.jpg', title: 'Слайд 3', subtitle: 'Описание 3'},
            {id: 4, img: '../static/images/picture-1-3.jpg', title: 'Слайд 4', subtitle: 'Описание 4'},
          ],
        },
        {
          id: 2,
          title: '«Тайная вечеря»  Леонардо да Винчи',
          currentPrice: '3 000 000 $',
          oldPrice: '',
          image: '../static/images/picture-2.jpg',
          description: '2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, dolore?',
          slides: [
            {id: 1, img: '../static/images/picture-2.jpg', title: 'Слайд 1', subtitle: 'Описание 1'},
            {id: 2, img: '../static/images/slide-2.png', title: 'Слайд 2', subtitle: 'Описание 2'},
            {id: 3, img: '../static/images/slide-3.png', title: 'Слайд 3', subtitle: 'Описание 3'},
            {id: 4, img: '../static/images/slide-4.png', title: 'Слайд 4', subtitle: 'Описание 4'},
          ],
        },
        {
          id: 3,
          title: '«Сотворение Адама» Микеланджело',
          currentPrice: '5 000 000 $',
          oldPrice: '6 000 000 $',
          image: '../static/images/picture-3.jpg',
          description: '3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, dolore?',
          slides: [
            {id: 1, img: '../static/images/picture-3.jpg', title: 'Слайд 1', subtitle: 'Описание 1'},
            {id: 2, img: '../static/images/slide-2.png', title: 'Слайд 2', subtitle: 'Описание 2'},
            {id: 3, img: '../static/images/slide-3.png', title: 'Слайд 3', subtitle: 'Описание 3'},
            {id: 4, img: '../static/images/slide-4.png', title: 'Слайд 4', subtitle: 'Описание 4'},
          ],
        },
        {
          id: 4,
          title: '«Урок анатомии»  Рембрандт',
          currentPrice: 'Продана на аукционе',
          oldPrice: '',
          image: '../static/images/picture-4.jpg',
          description: '4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, dolore?',
          slides: [
            {id: 1, img: '../static/images/picture-4.jpg', title: 'Слайд 1', subtitle: 'Описание 1'},
            {id: 2, img: '../static/images/slide-2.png', title: 'Слайд 2', subtitle: 'Описание 2'},
            {id: 3, img: '../static/images/slide-3.png', title: 'Слайд 3', subtitle: 'Описание 3'},
            {id: 4, img: '../static/images/slide-4.png', title: 'Слайд 4', subtitle: 'Описание 4'},
          ],
        },
        {
          id: 4,
          title: '«Урок анатомии»  Рембрандт',
          currentPrice: 'Продана на аукционе',
          oldPrice: '',
          image: '../static/images/picture-4.jpg',
          description: '4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, dolore?',
          slides: [
            {id: 1, img: '../static/images/picture-4.jpg', title: 'Слайд 1', subtitle: 'Описание 1'},
            {id: 2, img: '../static/images/slide-2.png', title: 'Слайд 2', subtitle: 'Описание 2'},
            {id: 3, img: '../static/images/slide-3.png', title: 'Слайд 3', subtitle: 'Описание 3'},
            {id: 4, img: '../static/images/slide-4.png', title: 'Слайд 4', subtitle: 'Описание 4'},
          ],
        },
        {
          id: 4,
          title: '«Урок анатомии»  Рембрандт',
          currentPrice: 'Продана на аукционе',
          oldPrice: '',
          image: '../static/images/picture-4.jpg',
          description: '4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, dolore?',
          slides: [
            {id: 1, img: '../static/images/picture-4.jpg', title: 'Слайд 1', subtitle: 'Описание 1'},
            {id: 2, img: '../static/images/slide-2.png', title: 'Слайд 2', subtitle: 'Описание 2'},
            {id: 3, img: '../static/images/slide-3.png', title: 'Слайд 3', subtitle: 'Описание 3'},
            {id: 4, img: '../static/images/slide-4.png', title: 'Слайд 4', subtitle: 'Описание 4'},
          ],
        },
      ],

    }
  },
  computed: {
    ...mapGetters(['searchQuery']),
    searchedPictures() {
      return this.pictures.filter(picture => picture.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
  methods: {
    toggleModal() {
      this.isShowModal = !this.isShowModal;
    },
    getCurrentPicture(x) {
      this.currentPicture = x
      this.toggleModal()
      console.log(x)
    }
  }
}
</script>

<style lang="scss" scoped>
.catalog {
  &__inner {}
  &__cards {
    display: flex;
    flex-wrap: wrap;
    &-item {
      margin: 0 10px 30px;
    }
    &-item:nth-child(4n+1) {
      margin-left: 0;
    }
    &-item:nth-child(4n+4) {
      margin-right: 0;
    }
  }
}

@media (max-width: 1260px) {
  .catalog {
    &__title {
      text-align: center;
    }
    &__cards {
      justify-content: center;
      &-item:nth-child(4n+1) {
        margin-left: 10px ;
      }
      &-item:nth-child(4n+4) {
        margin-right: 10px;
      }
    }
  }
}
@media (max-width: 400px) {
  .catalog {
    &__cards {
      justify-content: center;
      &-item {
        margin: 0 0 30px;
        &:nth-child(4n+1) {
          margin-left: 0 ;
        }
        &:nth-child(4n+4) {
          margin-right: 0;
        }
      }
    }
  }
}
</style>