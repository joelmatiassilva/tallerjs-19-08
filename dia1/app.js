new Vue({
  el: '#app',

  data () {
    return {
    hardColor: 'red',
    easyColor: 'blue',
      carrrera: {
        título: 'Materias de Sistemas',
        img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
        materias: [
          { dia: 'Lunes', nombre: "Análisis Matemática", dificultad: 5 },
          { dia: 'Martes', nombre: "Álgebra", dificultad: 4 },
          { dia: 'Miercoles', nombre: "Matemática Discreta", dificultad: 5 },
          { dia: 'Jueves', nombre: "Sistemas de Organizaciones", dificultad: 2 },
          { dia: 'Viernes', nombre: "Química", dificultad: 3 },
          { dia: 'Sábado', nombre: "Algoritmo y estructura de datos", dificultad: 4 }
        ],
      }
    }
  },
  
  created () {
    console.log('Created...')
  },

  mounted () {
    console.log('Mounted...')
  },

  methods: {

  }
})