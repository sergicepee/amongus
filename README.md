# Entre nosotros · juego de campo (PWA)

Prototipo instalable de juego exterior con mapa real, área dibujada, tareas sorteadas y minijuego de código.

## Abrirlo

Sirve esta carpeta desde un alojamiento HTTPS estático. Para desarrollo también funciona en `localhost`. En el móvil abre la URL y usa «Añadir a pantalla de inicio» para instalarla. El mapa y la búsqueda de lugares requieren conexión a internet.

## Probar la partida

1. Escribe entre cuatro y diez nombres.
2. Busca una aldea, parque o usa «Mi ubicación».
3. Pulsa «Dibujar zona», marca al menos tres esquinas de un área exterior segura y cierra la zona.
4. Crea la partida. Toca el mapa durante la partida para simular dónde estás y probar las tareas; los objetivos se sortean dentro del perímetro.
5. Acércate a una tarea (el prototipo usa un radio aproximado de 25 m) y resuelve el minijuego. Convoca una reunión para probar la votación.

## Qué trae

- Interfaz adaptable e instalable como PWA, con carcasa cacheada por service worker.
- Mapa real OpenStreetMap y búsqueda de lugares.
- Perímetro dibujable, tareas aleatorias, progreso, temporizador, retos, sabotaje, reuniones y votación demostrativa.
- Ubicación del dispositivo bajo petición y opción de simularla tocando el mapa.

## Límite importante

Es un prototipo local: no hay servidores ni sincronización entre teléfonos. La partida y el voto no se comparten; los nombres son de demostración para probar la interfaz en un único móvil. Para que cada persona juegue desde su propio dispositivo hay que añadir salas online, autenticación/códigos de unión y un servidor de tiempo real. El GPS no detecta paredes ni comprueba línea de visión. El anfitrión debe revisar el área y no colocar tareas en carreteras, propiedades privadas u otros lugares no seguros. Verifica las condiciones de uso del proveedor cartográfico antes de publicar a gran escala.
