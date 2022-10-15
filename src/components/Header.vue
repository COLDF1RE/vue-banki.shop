<template>
  <header class="header">
    <Container>
      <div class="header__inner">
<!--    <Logo/>-->
        <div class="header__menu">
          <svg @click="toggleMenuActive" v-if="!menuActive" class="header__menu-btn" width="40" height="40" viewBox="0 0 20 20" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0 5C0 2.23858 2.23858 0 5 0H15C17.7614 0 20 2.23858 20 5V15C20 17.7614 17.7614 20 15 20H5C2.23858 20 0 17.7614 0 15V5Z"
                fill="transparent"/>
            <path
                d="M5 5C5 4.44772 5.44772 4 6 4H14C14.5523 4 15 4.44772 15 5C15 5.55228 14.5523 6 14 6H6C5.44772 6 5 5.55228 5 5Z"
                fill="#403432"/>
            <path
                d="M5 10C5 9.44772 5.44772 9 6 9H14C14.5523 9 15 9.44772 15 10C15 10.5523 14.5523 11 14 11H6C5.44772 11 5 10.5523 5 10Z"
                fill="#403432"/>
            <path
                d="M5 15C5 14.4477 5.44772 14 6 14H14C14.5523 14 15 14.4477 15 15C15 15.5523 14.5523 16 14 16H6C5.44772 16 5 15.5523 5 15Z"
                fill="#403432"/>
          </svg>
          <svg @click="toggleMenuActive" v-if="menuActive" class="header__menu-btn" width="40" height="40" viewBox="0 0 20 20" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0 5C0 2.23858 2.23858 0 5 0H15C17.7614 0 20 2.23858 20 5V15C20 17.7614 17.7614 20 15 20H5C2.23858 20 0 17.7614 0 15V5Z"
                fill="#403432"/>
            <path
                d="M5 5C5 4.44772 5.44772 4 6 4H14C14.5523 4 15 4.44772 15 5C15 5.55228 14.5523 6 14 6H6C5.44772 6 5 5.55228 5 5Z"
                fill="#F6F3F3"/>
            <path
                d="M5 10C5 9.44772 5.44772 9 6 9H14C14.5523 9 15 9.44772 15 10C15 10.5523 14.5523 11 14 11H6C5.44772 11 5 10.5523 5 10Z"
                fill="#F6F3F3"/>
            <path
                d="M5 15C5 14.4477 5.44772 14 6 14H14C14.5523 14 15 14.4477 15 15C15 15.5523 14.5523 16 14 16H6C5.44772 16 5 15.5523 5 15Z"
                fill="#F6F3F3"/>
          </svg>
          <Menu class="header__menu-list" :menuActive="menuActive">
            <li @click="$router.push(item.route)" class="header__menu-item" v-for="item in menuList" :key="item.id">
              <a  class="header__menu-link" :class="{'header__menu-link--active': $route.path === item.route}">
                {{ item.title }}
              </a>
            </li>
          </Menu>
        </div>
        <Nav class="header__nav"/>
        <div class="header__search">
          <MyInput class="header__search-input" v-model="searchQuery" placeholder="Поиск"/>
          <MyButton class="header__search-btn button--default" @click="handleSearch">Найти</MyButton>
        </div>
      </div>
    </Container>
  </header>
</template>

<script>
import {mapActions} from "vuex";
import MyInput from "./UI/MyInput";
import MyButton from "./UI/MyButton";
import Nav from "./UI/Nav";
import Container from "./UI/Container";
import Logo from "./UI/Logo";
import Menu from "./UI/Menu";

export default {
  components: {Menu, Logo, Container, Nav, MyButton, MyInput},
  data() {
    return {
      menuActive: false,
      searchQuery: '',
      menuList: [
          {id: 1, title: 'Каталог', route: '/'},
          {id: 2, title: 'Доставка', route: '/shipping'},
          {id: 3, title: 'Оплата', route: '/payment'},
          {id: 4, title: 'Контакты', route: '/contacts'},
          {id: 5, title: 'О компании', route: '/about'},
      ],
    }
  },
  methods: {
    ...mapActions(['setSearchQuery']),
    toggleMenuActive() {
      this.menuActive = !this.menuActive
    },
    handleSearch(evt) {
      evt.preventDefault()
      this.setSearchQuery(this.searchQuery)
    },
  }
}
</script>

<style lang="scss" scoped>
.header {
  background-color: #f6f3f3;
  border-bottom: 1px solid #e1e1e1;
  &__inner {
    min-height: 96px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__menu {
    display: none;
    &-list {
      background-color: #f6f3f3;
      border: 1px solid #e1e1e1;
      top: 80px;
      left: 15px;
    }
    &-item {
      padding: 20px 20px;
      border-bottom: 1px solid #e1e1e1;
      cursor: pointer;
      &:hover {
        background-color: #b0a6a6;
      }
    }
    &-link {
      &--active {
        font-weight: 700;
      }
    }
  }
  &__nav {
    margin-left: 97px;
  }
  &__search{
    display: flex;
    &-input {
      width: 294px;
    }
    &-btn {}
  }
}
@media (max-width: 1100px) {
  .header__nav {
    margin-left: 15px;
  }
}
@media (max-width: 920px) {
  .header {
    &__nav {
      margin: 10px 15px 20px;
    }
    &__inner {
      flex-direction: column;
      justify-content: center;
      flex-wrap: wrap;
      height: 120px;
    }
  }
}
@media (max-width: 520px) {
  .header {
    &__inner {
      flex-direction: inherit;
      justify-content: space-between;
      height: 96px;
    }
    &__nav {
      display: none;
    }
    &__search{
      &-input {
        width: 130px;
      }
    }
    &__menu {
      display: block;
    }
  }
}
</style>