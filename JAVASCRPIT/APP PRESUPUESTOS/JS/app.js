const ingresos = [
    new Ingreso('Sueldo', 2000),
    new Ingreso('Ventas', 6000),
    new Ingreso('Bienes Compartidos', 2000),
    new Ingreso('Alquileres', 5000)
];

const egresos = [
    new Egreso('Alquiler', 1900),
    new Egreso('Drip', 1500),
    new Egreso('Hobbies', 100)
];


let cargarApp = ()=>{
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}

let totalIngresos = ()=>{
    let totalIngreso = 0;
    for(let ingreso of ingresos){
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
}

let totalEgresos = ()=>{
    let totalEgreso = 0;
    for(let egreso of egresos){
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
}

let cargarCabecero = ()=>{
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos()/totalIngresos();
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos()); 
}

const formatoMoneda = (valor)=>{
    return valor.toLocaleString('es-AR',{style: 'currency', currency:'USD', minimumFractionDigits:2});

}

const formatoPorcentaje = (valor)=>{
    return valor.toLocaleString('es-AR', {style: 'percent', minimumFractionDigits:2});
}


const cargarIngresos = ()=>{
    let IngresosHTML = '';
    for(let ingreso of ingresos){
        IngresosHTML += crearIngresoHTML(ingreso);
    } 
    document.getElementById('lista-ingresos').innerHTML = IngresosHTML;
}


const crearIngresoHTML = (ingreso)=>{
    let ingresoHTML = `  <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${ingreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
        <div class="elemento_porcentaje">%15</div>
        <div class="elemento_eliminar">
        <button class="elemento_eliminar--btn">
        <ion-icon name="close-circle-outline"
        onclick='eliminarIngreso(${ingreso.id})'></ion-icon></button>
        </div> 
    </div>
   </div>`;
   return ingresoHTML;
}

const eliminarIngreso = (id)=>{
     let indiceEliminar = ingresos.findIndex(ingreso => ingreso.id === id);
     ingresos.splice(indiceEliminar, 1);
     cargarCabecero();
     cargarIngresos();  
}


const cargarEgresos = ()=>{
    let egresosHTML = '';
    for(let egreso of egresos){
        egresosHTML += crearEgresoHTML(egreso);
    } 
    document.getElementById('lista-egresos').innerHTML = egresosHTML;
}

const crearEgresoHTML = (egreso)=>{
    let egresoHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${egreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">${formatoMoneda(egreso.valor)}</div>
        <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>
        <div class="elemento_eliminar">
        <button class="elemento_eliminar--btn">
        <ion-icon name="close-circle-outline"
        onclick='eliminarEgreso(${egreso.id})'></ion-icon>
        </button>
        </div>
    </div>
   </div>
    `;
   return egresoHTML;
}

let eliminarEgreso = (id)=>{
     let indiceEliminar = egresos.findIndex(egreso => egreso.id === id);
     egresos.splice(indiceEliminar, 1);
     cargarCabecero();
     cargarEgresos();
}

let agregarDato = ()=>{
     let forma = document.forms['forma'];
     let tipo = forma['tipo'];
     let descripcion = forma['descripcion'];
     let valor = forma['valor'];
     if(descripcion.value !== '' && valor.value !== ''){
        if(tipo.value === 'ingreso'){
          ingresos.push(new Ingreso(descripcion.value, +valor.value));
          cargarCabecero();
          cargarIngresos();
        }
        else if(tipo.value === 'egreso'){
            egresos.push(new Egreso(descripcion.value, +valor.value));
            cargarCabecero();
            cargarEgresos();
        }
     }
}