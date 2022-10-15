<template>
  <footer class="footer">
    <Container>
      <div class="footer__inner">
        <Nav class="footer__nav"/>
        <div class="footer__info">
          <p class="footer__info-phone">+7 (812) 555-55-55</p>
          <p class="footer__info-address">г. Санкт-Петербург, ул. Ефимова, 3</p>
        </div>
      </div>
    </Container>
  </footer>
</template>

<script>
import Container from "./UI/Container";
import Nav from "./UI/Nav";
import MyButton from "./UI/MyButton";
export default {
  components: {MyButton, Nav, Container}
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: #eceaea;
  &__inner{
    display: flex;
    justify-content: space-between;
    min-height: 96px;
    align-items: center;
  }
  &__nav {
    margin-left: 97px;
  }
  &__info {
    display: flex;
    align-items: center;
    &-phone {
      padding-left: 24px;
      position: relative;
      &:after{
        content: '';
        position: absolute;
        height: 16px;
        width: 16px;
        background-image: url("/static/icons/phone-icon.png");
        background-repeat: no-repeat;
        background-position: center;
        left: 0;
        bottom: 0;
      }
    }
    &-address {
      padding-left: 24px;
      width: 200px;
      margin-left: 35px;
      position: relative;
      &:after{
        content: '';
        position: absolute;
        height: 16px;
        width: 16px;
        background-image: url("/static/icons/location-icon.png");
        background-repeat: no-repeat;
        background-position: center;
        left: 0;
        bottom: 10px;
      }
    }
  }

}
@media (max-width: 1100px) {
  .footer__nav {
    margin-left: 15px;
  }
}
@media (max-width: 920px) {
  .footer__inner{
    flex-direction: column;
    justify-content: center;
  }
  .footer__nav {
    margin-bottom: 15px;
  }
}
@media (max-width: 850px) {
  .footer__nav {
    margin-left: 0px;
  }
}
@media (max-width: 480px) {
  .footer__info {
    flex-direction: column;
    justify-content: left;
    align-items: flex-start;
    &-phone {
      margin-bottom: 15px;
    }
    &-address {
      margin-left: 0;
      margin-bottom: 15px;
    }
  }
}
</style>