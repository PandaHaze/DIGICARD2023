const personas = [new Persona('Juani','Guzman'),
    new Persona('Daniela', 'Bisarello')];

function mostrarPersonas(){
    console.log('mostrar personas');
    let texto = '';
    for(let persona of personas){
        console.log(persona);
        texto += `<li>${persona._nombre} ${persona._apellido}</li>`;
    }
    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona(){
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    const persona = new Persona(nombre.value, apellido.value);
    console.log(persona);
    personas.push(persona);
    mostrarPersonas();

}