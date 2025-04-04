# 🏆 Portafolio QA - Juan Cruz  

Este repositorio contiene **pruebas automatizadas E2E** desarrolladas con **Cypress**, enfocadas en la validación de un sitio web de venta de entradas para Boca Juniors.  

## 🚀 Pruebas realizadas  

1️⃣ **Login.cy.js** - Prueba de login exitoso y redirección.  
2️⃣ **Partido.cy.js** - Validación de detalles de un partido.  
3️⃣ **Tickets.cy.js** - Flujo completo de compra de entradas.  

## 🛠️ Tecnologías utilizadas  
- Cypress 🏗️  
- JavaScript (para los tests) 💻  
- HTML y CSS (para la estructura del sitio) 🌐  
- Git y GitHub 🔗  

## 📂 Estructura del proyecto  
📁 cypress/ 
├── 📁 e2e/ 
│ ├── login.cy.js 
│ ├── partido.cy.js 
│ ├── tickets.cy.js 
├── 📁 videos/ # Aquí se almacenan los videos de pruebas 
├── 📁 fixtures/ 
├── 📁 support/ 
├── 📁 plugins/ 
📁src/
│ ├── app.js
│ ├── index.html
│ ├── login.html
│ ├── partido.html
│ ├── tickets.html
│ ├── style.css
├── cypress.config.js
├── .gitignore
├── package-lock.json
├── package.json 
├── README.md

## 🚀 Cómo ejecutar las pruebas 
📌 Requisitos previos

Antes de ejecutar las pruebas, asegúrate de tener instalado:

    Node.js 

    Cypress instalado en el proyecto

    Git y un entorno configurado
    
Si no tienes Cypress instalado, ejecútalo con: npm install cypress --save-dev
 
## ▶️ Ejecutar las pruebas
Para correr las pruebas en modo interactivo (GUI): npx cypress open

Luego, en la interfaz de Cypress, selecciona el navegador y el test a ejecutar.

Para ejecutar todas las pruebas en modo headless (sin interfaz gráfica): npx cypress run







