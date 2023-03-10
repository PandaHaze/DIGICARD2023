const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola mundo con Vue',
        frutas: [
            {nombre: 'Manzana', cantidad: 10},
            {nombre: 'Durazno', cantidad: 9},
            {nombre:'Mango', cantidad: 7}
        ],
        nuevaFruta: '',
        total: 0
    },
    methods:{
        agregarFruta() {
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad: 0
            })
        }
    },
    computed: {
        sumarFrutas(){
            this.total = 0;
            for(fruta of this.frutas){
                this.total = this.total + fruta.cantidad;
            }
            return this.total;
        }
    }
})