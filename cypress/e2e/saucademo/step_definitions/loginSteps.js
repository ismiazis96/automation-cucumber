// const { Given, When, Then } = require('@cucumber/cucumber');
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I am on the login page', function () {
  cy.visit('https://www.saucedemo.com');
});

When('I enter the username {string} and password {string}', (username, password) => {
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
  }
);

When('I enter the username {string}', (username) => {
  cy.get('[data-test="username"]').type(username);
}
);

When('I click button login', function () {
   cy.get('[data-test="login-button"]').click(); 
});

Then('I should see the inventory page', function () {
  cy.url().should("include", '/inventory.html');
});

// element negative
Then('displaying username or password is incorrect', () => {
    cy.get('[data-test="error"]').should('contain','Username and password do not match any user in this service');
});

// element negative
Then('I username column is required', () => {
  cy.get('[data-test="error"]').should('contain','Username is required');
})

// element negative
Then('displaying mandatory password information', () => {
  cy.get('[data-test="error"]').should('contain','Password is required');
})