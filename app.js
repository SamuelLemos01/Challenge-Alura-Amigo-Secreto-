// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.//
//Funciones a desarrollar: Agregar nombres, validar entrada, visualizacion de la lista y sorteo aleatorio

// Crear un array o lista vacia para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un nuevo amigo a la lista
function agregarAmigo() {
    // Obtiene el elemento de input del HTML donde se ingresa el nombre del amigo
    const nombresUsuario = document.getElementById('amigo');
    
    // Obtiene el valor del input y elimina espacios en blanco al inicio y final con el .trim
    const nombreIngresado = nombresUsuario.value.trim();
    
    // Verifica si se ingresó un nombre válido
    if (nombreIngresado) {
        // Agrega el nombre al array de amigos
        amigos.push(nombreIngresado);
        
        // Actualiza la lista de amigos mostrada en pantalla llamando a otra funcion
        mostrarAmigos();
        
        // Limpia el campo de input despues de ingresar un nombre
        nombresUsuario.value = '';
    } else {
        // Muestra una alerta si no se ingresó un nombre válido osea, no lleno el input
        alert("Ingrese un nombre válido");
    }
}

// Función para mostrar la lista de amigos en forma de lista
function mostrarAmigos() {
    // Obtiene el elemento de lista del HTML donde se mostrarán los amigos
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Limpia la lista anterior para evitar duplicados
    listaAmigos.innerHTML = '';
    
    // Recorre cada amigo en la lista usando el ciclo for 
    amigos.forEach(amigo => {
        // Crea un nuevo elemento de lista
        const li = document.createElement('li');
        
        // Establece el texto del elemento como el nombre del amigo
        li.textContent = amigo;
        
        // Agrega el elemento de lista a la lista de amigos
        listaAmigos.appendChild(li);
    });
}

// Función para realizar el sorteo de amigo secreto
function sortearAmigo() {
    // Obtiene el elemento donde se mostrará el resultado del sorteo
    const resultado = document.getElementById('resultado');
    
    // Limpia cualquier resultado anterior
    resultado.innerHTML = '';

    // Verifica que haya al menos dos amigos para realizar el sorteo
    if (amigos.length < 2) {
        // Muestra una alerta si no hay suficientes amigos
        alert("Debes ingresar más de dos nombres para hacer el sorteo");
        return;
    }
    
    // Da un nombre sorteado aleatoriamente entre la cantidad de nombres ingresados a traves de su indice
    const resultadoSorteo = Math.floor(Math.random() * amigos.length);
    
    // Selecciona el amigo secreto usando el índice aleatorio
    const amigoSecreto = amigos[resultadoSorteo];
    
    // Crea un nuevo elemento de lista para mostrar el resultado
    const li = document.createElement('li');
    
    // Establece el texto del elemento con el nombre del amigo secreto
    li.textContent = `Tu amigo secreto es ${amigoSecreto}`;
    
    // Agrega el resultado a la lista de resultados
    resultado.appendChild(li);
}