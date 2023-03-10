Vue.component('padre',{
    template: //html
    `
       <div class="p-5 bg-dark text-white">
       <h2>Componente Padre: {{numeroPadre}}</h2>
       <button class="btn btn-danger" @click="numeroPadre++">+</button>
       {{nombre2}}
       <hijo :numero="numeroPadre" @nombre2="nombre2 = $event"></hijo>
       </div>
    `,
    data(){
        return{
          numeroPadre: 0,
          nombre2: ''
        }
    }
})