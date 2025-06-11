# create strucdb

Generador de proyectos Node.js con estructura base, ideal para comenzar rápidamente con Express.

## 🛠 ¿Qué hace este generador?

Este paquete crea una estructura básica para un proyecto Node.js, incluyendo:

- Un archivo `index.js` configurado con Express
- Instalación automática de dependencias como `express`, `mongoose`, `path` y `open`.
- Carpetas `public/` y `private/` creadas automáticamente

## 📁 Estructura del proyecto

strucdb/
├── index.js
├── package.json
├── package.lock.json
├── node_modules/
├── public/
└── private/



### 📂 `public/`

Contiene las carpetas de pages,styles y js, mismas las cuales sirven para el Frontend del proyecto.
De igual manera contiene el index.html que es la primer pagina que se abre cuando el proyecto se ejecuta.

## 📁 Estructura del Frontend

public/
├── pages/
#   Resto de paginas que utilizaras.
├── styles/
├── js/
└── index.html

Express servirá esta carpeta automáticamente usando:

```js
app.use(express.static(path.join(__dirname, 'public')));
```



### 📂 `private/`

Contiene las carpetas de modules y routes, mismas las cuales sirven para el Backend del proyecto

## 📁 Estructura del Backend

private/
├── modules/
├── routes/
└── Conexion.js





