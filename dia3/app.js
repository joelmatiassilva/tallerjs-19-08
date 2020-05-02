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
      async materia (newVal, oldVal) {
          this.backCarreraMaterias = this.carrera
          var found

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

          /*
            found = () => {
              return this.materia !== ''
                ?  
                this.componentCarrera["materias"].find(element => element.nombre === this.materia)
                :
                undefined
            }


            if (found()) {
              this.componentCarrera["materias"]  = [{ nombre: found().nombre, dia: found().dia, dificultad: found().dificultad }]
            } else {
              this.componentCarrera = {...this.carrera}
            }
          */

      }
    },
      methods: {
        toogleMostrarMaterias () {
            console.log("methods - toogleMostrarMaterias")
            this.mostrarMaterias = !this.mostrarMaterias
        }
      },
      beforeCreate () {
        console.log(' ************************** component beforeCreate...')
      },

      created () {
        console.log(' ************************** component Created...')
      },
      beforeMount() {
        console.log(' ************************** component beforeMounte...')
      },
      beforeUpdate() {
        console.log(' ************************** component beforeUpdate...')
      },
      mounted() {
        console.log("************************ component mounted: %o", this.carrera) 
        this.componentCarrera = { ...this.carrera}
      },
      updated() {
        console.log(' ************************** component updated...')
      },
      beforeDestroy () {
        console.log("************************ component beforeDestroy")
      },
      destroy() {
        console.log("************************ component destroy")
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
  beforeCreate () {
    console.log(' ************************** APP beforeCreate...')
  },

  created () {
    console.log(' ************************** APP Created...')
  },
  beforeMount() {
    console.log(' ************************** APP beforeMounte...')
  },
  beforeUpdate() {
    console.log(' ************************** APP beforeUpdate...')
  },
  mounted() {
    console.log("************************ APP mounted...") 
  },
  updated() {
    console.log(' ************************** APP updated...')
  },
  beforeDestroy () {
    console.log("************************ APP beforeDestroy")
  },
  destroy() {
    console.log("************************ APP destroy")
  }

})