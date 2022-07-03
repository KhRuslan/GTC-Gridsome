<template>
  <div class="bg">
    <div class="container_castom">
      <h2 class="big_t text-center">Что входит в программу курса?</h2>
      <LineLayout></LineLayout>
      <div class="flex flex-wrap justify-center gap-3">
        <div class="glo" v-for="edge in $static.programs.edges" :key="edge.node.id">
          <div class="im">
            <g-image :src="edge.node.image"  />
          </div>
          <div class="title">{{ edge.node.title }}</div>
          <div class="desc">{{ edge.node.description }}</div>
        </div>
      </div>
      <div class="btn">
        <MyButtonLayout @click="goto('contact')"
          >Оставить заявку</MyButtonLayout
        >
      </div>
    </div>
  </div>
</template>

<static-query>
query Programs {
  programs: allPrograms(order: ASC) {
    edges {
      node {
        id
        title
        description
        image
      }
    }
  }
}
</static-query>

<script>
export default {};
</script>

<style scoped>
.big_t {
  font-size: 3.75rem;
  line-height: 1;
  font-family: Inter-ExtraBold;
  color: white;
  margin-bottom: 3rem;
}
.bg {
  padding: 3rem 0 4rem;
  background: rgb(17, 18, 20);
}
.line {
  width: 7rem;
  height: 0.875rem;
  background: rgb(255, 255, 255);
  margin: 0 auto 3rem;
}
.glo {
  display: flex;
  flex-direction: column;
  color: white;
  max-width: 20rem;
  width: 18rem;
  height: 20rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  background: rgb(20, 21, 24);
  border-radius: 1rem;
  /* height: 5rem; */
}
.title {
  line-height: 1rem;
  font-size: 1.125rem;
  color: rgb(255, 255, 255);
  font-family: SF-Bold;
  text-align: center;
  padding-top: 2.5rem;
}
.desc {
  color: rgb(156, 163, 175);
  line-height: 1rem;
  font-size: 1rem;
  font-family: SF-Light;
  text-align: center;
  padding-top: 2rem;
}
.im {
  margin: 0 auto;
}
.btn {
  margin: 3rem auto 0;
  text-align: center;
}
</style>
