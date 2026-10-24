# BANDO — Juego de campo

Aplicación web progresiva para una partida de deducción en exteriores. La interfaz usa React y Vite; el mapa se dibuja con Leaflet y OpenStreetMap.

## Importante: no abrir index.html directamente

Abrir el archivo como `file://` impide cargar módulos web y puede bloquear el mapa y la búsqueda. Usa el servidor de desarrollo:

1. Instala Node.js 20.19 o superior.
2. En esta carpeta, ejecuta `npm install` una vez.
3. Ejecuta `npm run dev`.
4. Abre en el ordenador la dirección local que muestre la terminal (por defecto `http://localhost:5173`).

Incluimos `INICIAR-BANDO.bat`: haz doble clic para abrir la aplicación en Windows. Necesita Node.js 20.19 o superior y conexión durante la primera instalación.

## Uso

1. Añade de 4 a 10 nombres y selecciona a qué persona representa este dispositivo.
2. Busca una localidad o dirección, o centra el mapa en el teléfono.
3. Pulsa **Dibujar zona**, marca al menos tres puntos sobre el mapa y ciérrala.
4. Crea la partida. Se sortean tareas dentro del área elegida.
5. Pulsa **Probar sin GPS** y toca el mapa para simular movimiento; o activa **Seguir mi posición** desde el móvil.
6. Acércate a una tarea, abre el reto, completa el código y prueba las reuniones o acciones del impostor.

## Para probar desde un teléfono

El mapa y la búsqueda funcionan desde la dirección local si el ordenador y el móvil están en la misma Wi-Fi; usa la IP local del ordenador y el puerto 5173. Los navegadores móviles suelen exigir HTTPS para dar acceso GPS y permitir instalar la PWA. Para probar esas funciones en el teléfono, sube los archivos dentro de `dist` a un alojamiento HTTPS estático. El ZIP `BANDO-web.zip` ya contiene ese paquete listo para publicar. No abras el HTML desde un gestor de archivos.

## Estado de esta versión

La interfaz y el bucle de juego funcionan en modo local para probar mapas, tareas y pantallas. Todavía no hay salas en línea ni sincronización entre los teléfonos del grupo. El servicio de mapas y la búsqueda necesitan internet. OpenStreetMap exige atribución; revisa los términos de sus servicios antes de un lanzamiento público. Las tareas se sortean dentro del polígono, pero el anfitrión debe comprobar que el área no incluya vías, propiedades privadas ni lugares peligrosos.

