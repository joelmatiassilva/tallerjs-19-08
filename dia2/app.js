new Vue({
  el: '#app',

  data () {
    return {
    regional: "FRBA",
    carrera: "sistemas",
    hardColor: 'red',
    easyColor: 'blue',
    mostrarMaterias: true,
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

  computed : {
      tituloComputed () {
        console.log("titulo computado - funciones que siempre devuelve un valor.")
        return `${this.regional} - ${this.carrera}`
      }
  },

  watch: {
    mostrarMaterias (newVal, oldVal) {
        console.log(" mostrarMaterias - watch")
        console.log(newVal, oldVal)
    }
  },
  
  created () {
    console.log('Created...')
  },

  mounted () {
    console.log('Mounted...')
  },

  methods: {
    toogleMostrarMaterias () {
        console.log("toogleMostrarMaterias")
        this.mostrarMaterias = !this.mostrarMaterias
    }
  }
})