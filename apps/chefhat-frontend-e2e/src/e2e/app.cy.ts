import { getGreeting } from '../support/app.po';

describe('Chefhat Home Page', () => {
  it('successfully loads', () => {
    cy.visit('http://127.0.0.1:3000');

    getGreeting().contains(/Chefhat/);
  });
});
