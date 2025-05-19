
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When('I click item product', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
});

When('I go to page cart', () => {
    cy.get('[data-test="shopping-cart-link"]').click();
});

// assertion halaman cart
Then('I should find the items on the cart page', () => {
    cy.get('[data-test="inventory-item-name"]').should('contain','Sauce Labs Bike Light');
    cy.get('[data-test="inventory-item-price"]').should('contain','$');
});

When('I click go to page checkout', () => {
    cy.get('[data-test="checkout"]').click();
});

When('I buyer confirmation form username {string} and lastname {string} and Zip {string}', (username, lastname, postalCode) => {
    cy.get('[data-test="firstName"]').type(username);
    cy.get('[data-test="lastName"]').type(lastname);
    cy.get('[data-test="postalCode"]').type(postalCode);
});

When('I click button continue', () => {
    cy.get('[data-test="continue"]').click();
});

When('I confirmation item to finish', () => {
    cy.get('[data-test="finish"]').click();
});

Then('I Should Success order', () => {
    cy.get('[data-test="complete-header"]').should('contain','Thank you for your order!');
});

Then('I Should wording message error checkout', () => {
    cy.get('h3').should('contain','First Name is required');
});





