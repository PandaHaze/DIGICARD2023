const app = new Vue ({
    el: '#app',
    data:{
        mensaje:'Hola Fede te amo',
        contador: 0 
    },
    computed: {
invertido(){
    return this.mensaje.split('').reverse().join('');
},
color(){
    return {
        'bg-success' : this.contador <=  10,
        'bg-warning' : this.contador > 10 && this.contador < 20, 
        'bg-danger' : this.contador >= 20 
    }
}
    }
})