<template>
  <div>
    <div class="two"></div>
    <div class="bg">
      <div class="container_castom">
        <LineLayout class="line_block_two"></LineLayout>
        <h2 class="cursor-default">
          <span class="blue"> Попробуй себя в разных </span>
          <br />
          <span class="darck_blue">направлениях</span>
        </h2>
        <div class="flex flex_wrap products cursor-default">
          <div class="product" v-for="edge in $static.products.edges" :key="edge.node.id">
            <div class="img flex "><g-image :src="edge.node.image" alt="" /></div>
            <p class="color_black p_title">{{ edge.node.title }}</p>
            <p class="p_desc color_grey">{{ edge.node.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>

query Products {
  products: allProducts(order: ASC) {
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
.line_block_two {
  background: rgb(64, 64, 86);
  width: 5rem;
  height: 0.5rem;
  margin: 0 auto 1.2rem;
}
h2 {
  font-size: 48px;
  line-height: 100%;
  text-align: center;
  font-family: Inter-ExtraBold;
  margin-bottom: 5rem;
}
.p_title {
  font-size: 1.5rem;
  line-height: 2rem;
  font-family: Inter-SemiBold;
  margin-bottom: 1.25rem;
}
.p_desc {
  font-size: 1rem;
  line-height: 1.5rem;
  font-family: SF-Regular;
}

.product img {
  width: 3.5rem;
  margin-bottom: 1rem;
}
.bg {
  background: rgb(248, 248, 248);
}
.product {
  text-align: center;
  width: 32%;
  padding: 0 1rem;
}
.products {
  /* justify-content: space-between; */
  justify-content: center;
  gap: 1rem;
}

.two {
  height: 8rem;
  background: rgb(248, 248, 248);
}
div.img {
  justify-content: center;
}
</style>
