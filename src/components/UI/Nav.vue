<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__list-item" v-for="item in menuList">
        <a @click="$router.push(item.route)" class="nav__list-link" :class="{'nav__list-link--active': $route.path === item.route}">
          {{ item.title }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {id: 1, title: 'Каталог', route: '/'},
        {id: 2, title: 'Доставка', route: '/shipping'},
        {id: 3, title: 'Оплата', route: '/payment'},
        {id: 4, title: 'Контакты', route: '/contacts'},
        {id: 5, title: 'О компании', route: '/about'},
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
  .nav{
    font-size: 14px;
    line-height: 21px;
    white-space: nowrap;
    &__list {
      display: flex;
      align-items: center;
      &-item {
        margin-left: 48px;
        &:first-child {
          margin-left: 0;
        }
      }
      &-link {
        &:hover {
          color: #34ACA7;
        }
        &--active {
          position: relative;
        }
        &--active:after {
          content: '';
          position: absolute;
          height: 1px;
          width: 100%;
          background-color: #403432;
          left: 0;
          bottom: -5px;
        }
      }
    }
  }
  @media (max-width: 1100px) {
    .nav__list-item {
      margin-left: 20px;
    }
  }
  @media (max-width: 480px) {
    .nav__list {
      flex-direction: column;
      text-align: center;
      align-items: center;

    }
    .nav__list-item {
      margin: 15px;
      &:first-child {
        margin: 15px;
      }
    }
  }
</style>