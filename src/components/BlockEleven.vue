<template>
  <div class="bg">
    <div class="container_castom">
      <div class="flex mai">
        <div class="left">
          <LineLayout></LineLayout>
          <h2 class="bg_cont">Подайте заявку!</h2>
          <p class="sm_cont">
            Оставьте свои контакты и мы обязательно с вами свяжемся
          </p>
          <form action="post">
            <div class="inp">
              <InputLayout placeholder="Ваше имя" class="name"></InputLayout>
              <InputLayout placeholder="Номер телефона" type="phone"></InputLayout>
            </div>
            <div><MyButtonLayout>Оставить заявку</MyButtonLayout></div>
          </form>
        </div>
        <div class="right">
          <h2 class="bg_cont">Свяжитесь с нами</h2>
          <p class="medium_cont">НАШИ КОНТАКТЫ</p>
          <p class="wh_cont pad">
            <a href="tel:+77088651071">+7(708)865-10-71</a>
          </p>
          <p class="wh_cont "><a href="mailto:main@gotocode.net">main@gotocode.net</a></p>
          <p class="medium_cont">СОЦИАЛЬНЫЕ СЕТИ</p>
          <div class="flex media">
           <a href=" https://wa.me/message/7GALVK4JTZSSL1"> <div class="whats"><img src="../assets/BlockEleven/whatsapp.svg" alt="" /></div></a>
            <a href="https://www.instagram.com/goto_code/"><div><img src="../assets/BlockEleven/inst.svg" alt="" /></div></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

};
</script>

<style scoped>

.left {
  flex-basis: 60%;
}
.right {
  flex-basis: 40%;
  /* flex-grow: 1; */
  padding-left: 8rem;
  /* text-align: end; */
}
.bg_cont {
  font-size: 2.25rem;
  line-height: 2.5rem;
  color: white;
  margin-top: 1rem;
  font-family: Inter-Bold;
}
.medium_cont {
  font-size: 1rem;
  line-height: 1.5rem;
  color: rgb(255, 255, 255);
  opacity: 0.2;
  font-family: SF-Medium;
  margin-top: 2.75rem;
}
.sm_cont {
  color: rgb(85, 85, 85);
  line-height: 100%;
  font-size: 1.2rem;
  font-family: SF-Regular;
}
.wh_cont {
  color: rgb(255, 255, 255);
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-family: SF-Regular;
  margin-top: 0.25rem;
}
.bg {
  background-image: url(../assets/BlockEleven/gg.d2e9db4.png);
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
}
.name {
  margin-right: 2rem;
}
.container_castom {
  padding-top: 5rem;
}
.left p {
  margin-bottom: 2rem;
}
.line {
  background: rgb(255, 255, 255);
  width: 5rem;
  height: 0.375rem;
}
.inp {
  margin-bottom: 3rem;
}.pad {
  margin-top: 1.5rem;
}
.whats {
  margin-right: 1rem;
}
.media {
  margin-top: 1.5rem;
}
</style>