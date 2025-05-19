Feature: Cart item and checkout Item Saucedemo

    Background: Precondition
        Given I am on the login page
        When I enter the username "standard_user" and password "secret_sauce"
        And I click button login
        Then I should see the inventory page

    @positive
    Scenario: User can select item and go to page cart - Positive Case
        When I click item product
        And I go to page cart
        Then I should find the items on the cart page

    @positive
    Scenario: Checkout Items succesfully - Positive Case
        When I click item product
        And I go to page cart
        And I click go to page checkout
        And I buyer confirmation form username "ismi" and lastname "azis" and Zip "1234"
        And I click button continue
        And I confirmation item to finish
        Then I Should Success order

    @negative
    Scenario: empty the buyer form column - Negative Case
        When I click item product
        And I go to page cart
        And I click go to page checkout
        And I click button continue
        Then I Should wording message error checkout