🏆 Portafolio QA - Juan Cruz

Bienvenido a mi portafolio de pruebas automatizadas con Cypress. Este repositorio contiene pruebas E2E desarrolladas para validar el flujo de compra de entradas para Boca Juniors.

## 📚 Contenido

- [🎯 Objetivo del Proyecto](#-objetivo-del-proyecto)
- [📥 Clonación del Repositorio](#-clonación-del-repositorio)
- [🚀 Pruebas Realizadas](#-pruebas-realizadas)
- [🛠️ Tecnologías Utilizadas](#️-tecnologías-utilizadas)
- [📂 Estructura del Proyecto](#-estructura-del-proyecto)
- [▶️ Cómo Ejecutar las Pruebas](#️-cómo-ejecutar-las-pruebas)
- [📸 Capturas de Pantalla / Videos](#-capturas-de-pantalla--videos)
- [📊 Resumen de Resultados - Cypress](#-resumen-de-resultados---cypress-modo-headless)
- [🏆 Contribuciones y Contacto](#-contribuciones-y-contacto)


## 🎯 Objetivo del Proyecto

El objetivo de este repositorio es demostrar mis habilidades en pruebas automatizadas E2E utilizando Cypress, validando el flujo completo de compra de entradas para partidos de Boca Juniors. Este proyecto forma parte de mi portafolio como QA Manual con conocimientos en automatización.

## 📥 Clonación del Repositorio

Para obtener una copia local del proyecto, ejecuta el siguiente comando en tu terminal:

```bash
git clone https://github.com/jccarratala94/pruebas-cypress-boca.git
```


## 🚀 Pruebas Realizadas
```
📌 Login.cy.js - Prueba de login exitoso y redirección al home si las credenciales son correctas.

📌 Partido.cy.js - Verifica que los detalles del partido (fecha, rival, estadio) se muestren correctamente.

📌 Tickets.cy.js - Simula el proceso completo de compra de entradas, desde la selección hasta la confirmación.

```
## 🛠️ Tecnologías Utilizadas

🏗️ Cypress (para las pruebas automatizadas)

💻 JavaScript (lenguaje principal para los tests)

🌐 HTML y CSS (estructura y estilos del sitio web)

🔗 Git y GitHub (control de versiones y repositorio remoto)

🧩 Versiones de herramientas utilizadas
```
- Node.js: 23.8.0
- npm: 10.9.2
- Cypress: 12.17.4
```
## 📂 Estructura del Proyecto
```
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js
│   │   ├── partido.cy.js
│   │   └── tickets.cy.js
│   ├── videos/         # Grabaciones de pruebas en ejecución
│   ├── fixtures/
│   ├── support/
│   └── plugins/
├── src/
│   ├── app.js
│   ├── index.html
│   ├── login.html
│   ├── partido.html
│   ├── tickets.html
│   └── style.css
├── cypress.config.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```


## ▶️ Cómo Ejecutar las Pruebas

📌 Requisitos Previos

- Antes de ejecutar las pruebas, asegúrate de tener instalado:

Node.js

Cypress instalado en el proyecto

Git y un entorno configurado

- Si no tienes Cypress instalado, ejecútalo con:

npm install cypress --save-dev

- 🚀 Ejecutar las pruebas

Para correr las pruebas en modo interactivo (GUI):

``` npx cypress open ```

Luego, en la interfaz de Cypress, selecciona el navegador y el test a ejecutar.

Para ejecutar todas las pruebas en modo headless (sin interfaz gráfica):

``` npx cypress run ```

## 📸 Capturas de Pantalla / Videos

Cypress genera automáticamente videos al ejecutar las pruebas en modo headless. En este repositorio se incluyen grabaciones representativas de cada prueba realizada:

### 🔹 Login

🎥 [Ver video de prueba de login](https://youtu.be/51E7Uxkx05o)

---

### 🔹 Partido

🎥 [Ver video de validación de partido](https://youtu.be/6IRFCUuuY14)

---

### 🔹 Tickets

🎥 [Ver video de flujo de compra de entradas](https://youtu.be/gsgvEvBxc5Q)

> Los videos se encuentran en la carpeta `/cypress/media` ya que Cypress guarda los originales en `/cypress/videos/`, carpeta excluida por el archivo `.gitignore`.

## 📊 Resumen de Resultados - Cypress (Modo Headless)

A continuación se presenta el resumen generado automáticamente por Cypress al ejecutar las pruebas en modo headless (npx cypress run):
 ```
  (Run Finished)
       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  login.cy.js                              00:05        1        1        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  partido.cy.js                            00:04        1        1        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  tickets.cy.js                            00:05        1        1        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        00:15        3        3        -        -        -  
    Todas las pruebas fueron exitosas ✅
```
## 🏆 Contribuciones y Contacto

Si tienes alguna sugerencia o quieres contribuir, ¡siéntete libre de hacer un fork y enviar un pull request!

📧 Contacto: jc.carratala.ruiz94@gmail.com
🔗 LinkedIn: Juan Cruz Carratalá

¡Gracias por visitar mi repositorio! 🚀







