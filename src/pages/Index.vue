<template>
  <div>
    <go-to-code-vue></go-to-code-vue>
    <block-two></block-two>
    <block-three></block-three>
    <block-four></block-four>
    <block-five></block-five>
    <block-six></block-six>
    <block-seven></block-seven>
    <block-eight></block-eight>
    <block-nine></block-nine>
    <block-ten></block-ten>
    <block-eleven></block-eleven>
  </div>
</template>

<script>
import GoToCodeVue from "~/components/GoToCode.vue";
import BlockTwo from "~/components/BlockTwo.vue";
import BlockThree from "~/components/BlockThree.vue";
import BlockFour from "~/components/BlockFour.vue";
import BlockFive from "~/components/BlockFive.vue";
import BlockSix from "~/components/BlockSix.vue";
import BlockSeven from "~/components/BlockSeven.vue";
import BlockEight from "~/components/BlockEight.vue";
import BlockNine from "~/components/BlockNine.vue";
import BlockTen from "~/components/BlockTen.vue";
import BlockEleven from "~/components/BlockEleven.vue";

export default {
  components: {
    GoToCodeVue,
    BlockTwo,
    BlockThree,
    BlockFour,
    BlockFive,
    BlockSix,
    BlockSeven,
    BlockEight,
    BlockNine,
    BlockTen,
    BlockEleven,
  },
    
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  /* color: white; */
}

.container_castom {
  width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

.flex {
  display: flex;
}
.flex_wrap {
  flex-wrap: wrap;
}
.container_castom-xl {
  width: 1280px;
  margin: 0 auto;
}
ul {
  text-decoration: none;
  list-style-type: none;
}

.blue {
  color: rgb(64, 64, 86);
}
.darck_blue {
  color: rgb(88, 69, 207);
}
.color_black {
  color: rgb(64, 64, 86);
}
.color_grey {
  color: rgb(152, 152, 152);
}
</style>
