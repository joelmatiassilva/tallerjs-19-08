Vue.component('MateriaDetalle', {
    data: function () {
        return {
          count: 0
        }
      },
      template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})


new Vue({
  el: '#app',

  data () {
    return {
    }
  },

  created () {
    console.log('Created...')
  },

  mounted () {
    console.log('Mounted...')
  },

})