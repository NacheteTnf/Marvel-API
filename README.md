# Marvel-API
En este proyecto se ha utilizado Vite, SASS, react-router, hooks, variables de entorno y un paquete para md5


#Cosas a tener en cuenta la API(su pagina web) no va muy bien, recordar que tienes maximo 3.000 Peticiones,
lo cual si haces un bucle infinito sin querer posiblemente tengas que registrarte de nuevo y usar las nuevas APIKEYS.
![documentacion1MD5](https://user-images.githubusercontent.com/78969670/222977056-f22d155b-7121-4f3a-b24f-e50cab851c46.PNG)

Hice una funcion para que sea mas sencillo si se pasa el numero maximo de peticiones!.

#Recordar que al descargar necesitareis un archivo .env en el cual pondres la APIKEY publica y APIKEY privada.

El proyecto consta de: 

  -Una carpeta public en la cual esta el icono de la pagina web.
  -Una carpeta src donde esta todo nuestro trabajo y donde explicare todo a continuacion:
    -Tenemos components que es el lugar donde estaran nuestros componentes.
    -Context que es donde declararemos el HOOK useContext.
    -Styles donde estara nuestros estilos en esta ocasion SASS en el cual dividimos en distintas carpetas para componentes
    variables globales etc
    -Nuestro main que es donde se ejecuta toda la aplicacion y nuestro App donde pintaremos nuestros componentes ademas de
    rutas gracias a react-router-dom
 
 
 Explicacion general:
 
 
 En el componente Main es donde esta la mayor parde del codigo donde utilizaremos useEffect para llamar a la API ademas de otras funciones
 como la funcionalidad de nuestra barra de busqueda, usaremos useContext para llamar a algunas variables y funciones que utilizaremos en varios
 componentes, ademas de pintar nuestro Componente Card que es donde estara la informacion de la API que consumimos.
 
 En el componente Card pasamos 2 parametros importantes lo cuales 1 "data" la informacion de la API y 2 "type" el cual nos dira si es comic,character
 o series, usamos useNavigation para enviar la informacion del ID y el type mediante onClick a la url y utilizarla tambien en nuestro componente Marvel.
 
 El componente Marvel lo usaremos para pintar la descripcion de cada objecto(comic, character o series) segun el ID y el type, cogeremos la url y le pasaremos
 utilizando useParams los parametros ID y type
 
 El componente Spinner es un Spinner que usaremos con useState para mostrar que esta cargando la informacion de la API en distintos puntos de los componentes.
