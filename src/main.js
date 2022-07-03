// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import AccordionLayout from '~/layouts/Acordion.vue'
import LineLayout from '~/layouts/Line.vue'
import MyButtonLayout from '~/layouts/MyButton.vue'
import InputLayout from '~/layouts/Input.vue'
import '~/assets/css/fonts.css'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('AccordionLayout', AccordionLayout)
  Vue.component('LineLayout', LineLayout)
  Vue.component('MyButtonLayout', MyButtonLayout)
  Vue.component('InputLayout', InputLayout)
  head.script.push({
    type: "script",
    src: "./TW-ELEMENTS-PATH/dist/js/index.min.js",
    body: true
  })
}
