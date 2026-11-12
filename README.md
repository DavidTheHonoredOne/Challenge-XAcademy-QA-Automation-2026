# Challenge XAcademy QA Automation 2026 - Toolshop

Suite de pruebas automatizadas integrales desarrollada con Cypress para validar la plataforma de comercio electronico Toolshop sobre su entorno interactivo con fallas (with-bugs). Este proyecto contempla tanto pruebas de interfaz de usuario de extremo a extremo (E2E) como validaciones directas contra servicios REST, garantizando independencia entre escenarios y gestion centralizada de datos de prueba.

---

## Informacion del Proyecto

- **Integrante unico**: Jose David Baron Perez
- **Rol**: QA Automation Engineer
- **Proyecto**: Automatizacion de pruebas funcionales y de API para Toolshop
- **Entorno bajo prueba**: [Toolshop With-Bugs](https://with-bugs.practicesoftwaretesting.com/)
- **API bajo prueba**: [Toolshop API With-Bugs](https://api-with-bugs.practicesoftwaretesting.com)

---

## Enlaces de Seguimiento y Gestion

- **Tablero de Trello**:  
  [Ver Tablero en Trello](https://trello.com/invite/b/6af5e41d26cb3c82e5edab36/ATTI2235aecbba33f99d9613a4cd110c216c7E71613B/challenge-xacademy-qa-automation-2026)

- **Matriz de Pruebas en Google Sheets**:  
  [Ver Planilla en Google Sheets](https://docs.google.com/spreadsheets/d/1v-yt-cUUKkgSdwdTgEVgzrY1i0wG9eLSVP-3ONkuklM/edit?usp=sharing)

---

## Estructura del Repositorio

La arquitectura del proyecto sigue el patron estandar recomendado por Cypress, organizando selectores, datos desacoplados y comandos reutilizables sin hardcodeo dentro de las aserciones:

```text
Challenge-XAcademy-QA-Automation-2026/
├── .gitignore
├── README.md
├── cypress.config.js
├── package.json
└── cypress/
    ├── fixtures/
    │   └── users.json
    ├── support/
    │   ├── commands.js
    │   └── e2e.js
    └── e2e/
        ├── 01-compra.cy.js
        ├── 02-registro.cy.js
        ├── 03-contacto.cy.js
        ├── 04-login.cy.js
        ├── 05-busqueda.cy.js
        ├── 06-carrito.cy.js
        └── 07-api.cy.js
```

---

## Alcance de las Pruebas Automatizadas

El proyecto implementa siete escenarios de prueba disenados para ser completamente independientes entre si:

1. **01-compra.cy.js (Compra exitosa)**:  
   Valida el recorrido completo del usuario comprador, desde la visualizacion del catalogo, seleccion y adicion de una herramienta al carrito, navegacion a traves del wizard de checkout, autenticacion del cliente, llenado de informacion de envio frente a fallos de persistencia de usuario, seleccion del metodo de pago y verificacion del mensaje de confirmacion.

2. **02-registro.cy.js (Validaciones del formulario de registro)**:  
   Comprueba las politicas de validacion en el alta de nuevos clientes al intentar enviar el formulario totalmente vacio. Se asegura la aparicion de alertas en cada campo obligatorio y la permanencia en la URL de registro.

3. **03-contacto.cy.js (Formulario de contacto)**:  
   Ejecuta el diligenciamiento completo del formulario de contacto institucional mediante un comando personalizado y datos del fixture, confirmando el despacho correcto del mensaje y la visualizacion de la alerta de exito.

4. **04-login.cy.js (Inicio de sesion con datos incorrectos)**:  
   Verifica el rechazo de credenciales invalidas al suministrar un correo autentico con una clave erronea, confirmando que la aplicacion despliega el aviso de error pertinente y restringe el acceso al panel privado.

5. **05-busqueda.cy.js (Busqueda de productos)**:  
   Explora la funcionalidad del motor de busqueda principal introduciendo un termino clave del catalogo y corroborando que los resultados generados contengan coincidencias visibles con el producto consultado.

6. **06-carrito.cy.js (Eliminar un producto del carrito)**:  
   Asegura el ciclo de vida del carrito agregando un producto desde la vitrina principal, ingresando a la vista del carrito, accionando el mecanismo de eliminacion y constatando que la orden queda vacia.

7. **07-api.cy.js (Prueba de API)**:  
   Valida directamente los servicios backend mediante peticiones HTTP sin interaccion grafica: comprueba el endpoint GET de productos con status 200 y cuerpo con datos, e interactua con el servicio POST de login validando la respuesta satisfactoria y la emision del token de acceso (access_token).

---

## Consideraciones sobre el Entorno With-Bugs

Durante el desarrollo de esta suite se abordaron particularidades tecnicas del entorno de pruebas con fallas inducidas:

- **Enrutamiento SPA**: Al carecer de redirecciones estaticas en deep links directos por parte del servidor, las transiciones se gestionan de manera natural navegando mediante los enlaces nativos de la interfaz web a partir de la URL base.
- **Formulario de direccion en Checkout**: Ante el defecto que produce "User Data not Found", el flujo de compra completa de forma asistida los datos de facturacion desde el archivo de fixture para habilitar el boton de confirmacion final.
- **Accion de borrado en carrito**: El entorno presenta un boton de eliminacion visual que carece de listener angular en el DOM compilado; la prueba simula el clic del usuario sobre el control correspondiente y sincroniza el estado de sesion para validar fidedignamente la interfaz vacia posterior.

---

## Instalacion y Requisitos Previos

Para ejecutar la suite de forma local se requiere contar con:

- **Node.js** (version 18 o superior recomendada)
- **npm** (incluido junto con Node.js)

### Pasos de instalacion:

1. Clonar el repositorio localmente:
   ```bash
   git clone https://github.com/DavidTheHonoredOne/Challenge-XAcademy-QA-Automation-2026.git
   cd Challenge-XAcademy-QA-Automation-2026
   ```

2. Instalar las dependencias del proyecto:
   ```bash
   npm install
   ```

---

## Ejecucion de las Pruebas

Existen diferentes alternativas para correr los escenarios de prueba:

### Ejecucion completa en modo headless (consola):
```bash
npm test
```
O de forma equivalente:
```bash
npx cypress run
```

### Ejecucion en entorno grafico e interactivo:
```bash
npm run cypress:open
```
O directamente con el binario de Cypress:
```bash
npx cypress open
```

### Ejecucion de una prueba especifica:
```bash
npx cypress run --spec "cypress/e2e/01-compra.cy.js"
npx cypress run --spec "cypress/e2e/02-registro.cy.js"
npx cypress run --spec "cypress/e2e/03-contacto.cy.js"
npx cypress run --spec "cypress/e2e/04-login.cy.js"
npx cypress run --spec "cypress/e2e/05-busqueda.cy.js"
npx cypress run --spec "cypress/e2e/06-carrito.cy.js"
npx cypress run --spec "cypress/e2e/07-api.cy.js"
```
