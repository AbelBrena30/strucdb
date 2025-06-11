# create-mi-proyecto

Generador de proyectos Node.js con estructura base, ideal para comenzar rápidamente con Express.

## 🛠 ¿Qué hace este generador?

Este paquete crea una estructura básica para un proyecto Node.js, incluyendo:

- Un archivo `index.js` configurado con Express
- Instalación automática de dependencias como `express`
- Carpetas `public/` y `private/` creadas automáticamente

## 📁 Estructura del proyecto

mi-proyecto/
├── index.js
├── package.json
├── package.lock.json
├── node_modules/
├── public/
└── private/


css
Copiar
Editar

### 📂 `public/`

Contiene archivos públicos que pueden ser servidos directamente por el servidor. Por ejemplo:

- HTML
- CSS
- JavaScript del cliente
- Imágenes

Express servirá esta carpeta automáticamente usando:

```js
app.use(express.static(path.join(__dirname, 'public')));
