Desafio de Amigo Secreto - Alura Latam

En este repositorio se encontrara desarrollado uno de los challenge propuestos Alura Latam el curso de ONE.
A traves de ya una plantilla realizada con HTML y CSS, se desarrollo la funcionalidad a traves de JavaScript siguiendo una serie de pasos que nos brindaba Alura.

Lo primero que hice, fue definir que funciones nececitaba para que la app de amigo secreto, tuviera funcionalidad.
![1](https://github.com/user-attachments/assets/048634ef-6dc4-4786-ae6b-6a2317deb7a8)

Una vez definido lo que tenia que hacer, Empece por crear una lista vacia para que conforme el usuario ingrese nombres, esta se valla llenando.
![2](https://github.com/user-attachments/assets/e9ab18aa-476d-4d74-81f6-287e76616def)

Luego pasamos a crear la funcion de agregar amigos. En este caso use Const para que su valor mas adelante no fuera cambiado. con const definimos que el nombre 
de usuario estaria relacionado con el input del HTML, luego creamos otra constante que almacenara y obtendra los nombres que digito el usuario.
Con el ciclo if le pasamos como parametro la constante del nombre ingresado y le decimos que lo agregue a la lista y luego invocamo otra funcion para que se
actualize la lista. Terminamos esta funcion, junto con un alert que en caso de que no se escriba ningun nombre y el usuario quiera subirlo, el sistema le arroja una alerta
indicandole que debe subir un nombre valido.
![3](https://github.com/user-attachments/assets/1f7689b7-7869-4306-839d-2779c5074ca9)

Pasamos ahora a la funcion de mostrar los amigos en pantalla, para esto creamos una constante que se conectara con la lista que esta en el HTML, usando el ciclo forEach,
vamos a hacer que amigos recorra la lista y este adentro cree un elemento li (que es un item de la lista en HTML) y luego cada li tenga como texto el nombre que digito el usuario.
y para terminar cada elemento li llegue a la lista vacia que se creo en primera instancia.
![4](https://github.com/user-attachments/assets/c5ca1959-3279-44fc-859f-2cd667e63984)

Para terminar la funcionalidad, creamos una funcion que sortee el amigo secreto de forma aleatoria usando el Math floor y el Math random para obtener un indice de la lista de forma
aleatoria, de esta forma le decimos que como resultado, el amigo secreto sera aquel que tenga el indice que nos da la formula de math floor, luego atraves de un li le decimos al 
usuario cual es su amigo secreto.
![5](https://github.com/user-attachments/assets/7f6f5c50-3c9f-43d2-90bf-39fb2c259c0c)

Conclusiones: 
-Tengo que aprender mas sobre arreglos.
-Investigar sobre la funcion de flecha.
-Como añadirle funcionalidades de si un nombre ya esta muestre una alerta o si digita numeros el programa se lo restrinja.
-Leer mas documentacion
-Apoyarme en compañeros del curso
