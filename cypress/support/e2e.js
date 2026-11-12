import './commands';

// Evitar que excepciones no controladas de la aplicacion detengan las pruebas
Cypress.on('uncaught:exception', () => {
  return false;
});
