/* eslint-disable @typescript-eslint/no-namespace */
// ***********************************************************
// https://on.cypress.io/configuration
// ***********************************************************
import './commands';
import { mount } from 'cypress/vue';


declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount,
      assertTitle(title:string): Chainable<void>,
    }
  }
}

Cypress.Commands.add('mount', mount);