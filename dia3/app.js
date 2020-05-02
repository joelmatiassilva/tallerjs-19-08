Vue.component('MateriaDetalle', {
    props:['carrera'],
    data: () => {
      return {
        hardColor: 'red',
        easyColor: 'blue',
        mostrarMaterias: true,
        materia: '',
        componentCarrera: {},
      }
    }, 
      template: `
      <div>
    <h1>{{ carrera.titulo  }}</h1>
    <input type="text" id="tituloComputed" v-model="materia">
    <span v-on:click="toogleMostrarMaterias">Mostrar Materias
        {{ this.mostrarMaterias ? '🐵' : '🙈' }}
    </span>
    <ul id="lasMaterias" v-show=mostrarMaterias>
        <li v-for="materia in this.componentCarrera.materias">
          <div v-if="materia.dificultad > 3" v-bind:style="{ color: hardColor }">{{ materia.dia }} - {{ materia.nombre }}</div>
          <div v-else v-bind:style="{ color: easyColor }">{{ materia.dia }} - {{ materia.nombre }}</div>
        </li>
    </ul>
    </div>
      `,
    watch: {
      materia (newVal, oldVal) {
          this.backCarreraMaterias = this.carrera
          let found


          if (this.materia !== ''){  
            found =  this.componentCarrera["materias"].find(element => element.nombre === this.materia);
            console.log("materia != vacio: %o", this.carrera)
          } else {
            this.componentCarrera = {...this.carrera}
            console.log("this.componentCarrera: %o", this.componentCarrera)
          }

          if (found !== undefined) {
            this.componentCarrera["materias"]  = [{ nombre: found.nombre, dia: found.dia, dificultad: found.dificultad }]
          } 


      }
    },
      methods: {
        toogleMostrarMaterias () {
            console.log("toogleMostrarMaterias")
            this.mostrarMaterias = !this.mostrarMaterias
        }
      },
      created () {
        console.log(' component Created...')
      },
      created () {
        console.log(' component Created...')
      },
      mounted() {
        console.log("mounted: %o", this.carrera) // I'm text inside the component.
        this.componentCarrera = { ...this.carrera}
      }
})


new Vue({
  el: '#app',

  data: () => {
    return {
      carrera: {
        titulo: 'Materias de Sistemas',
        regional: "FRBA",
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
    console.log(' app Created...')
  },

  mounted () {
    console.log('app Mounted...')
  },

})