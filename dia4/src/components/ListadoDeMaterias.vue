<template>
  <div class="">
    <h1>{{ carrrera.título }}</h1>


    <span v-on:click="toogleMostrarMaterias">Mostrar Materias
        {{ mostrarMaterias ? '🐵' : '🙈' }}
    </span>

    <ul id="lasMaterias" v-show=mostrarMaterias>
        <li v-for="materia in carrrera.materias" :key="materia.dia">
          <div v-if="materia.dificultad > 3" v-bind:style="{ color: hardColor }">{{ materia.dia }} - {{ materia.nombre }}</div>
          <div v-else v-bind:style="{ color: easyColor }">{{ materia.dia }} - {{ materia.nombre }}</div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ListadoDeMaterias',
  props: {
    msg: String
  },
    data () {
    return {
    regional: "FRBA",
    carrera: "sistemas",
    hardColor: 'red',
    easyColor: 'blue',
    mostrarMaterias: true,
      carrrera: {
        título: 'Materias de Sistemas',
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


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
