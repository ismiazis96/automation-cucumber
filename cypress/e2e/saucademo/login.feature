Feature: Login to saucedemo
    Background: Precondition
        Given I am on the login page

    @positive
    Scenario: Succesful login with valid data credential - Positive Case
        When I enter the username "standard_user" and password "secret_sauce"
        And I click button login
        Then I should see the inventory page

    @negative
    Scenario: Missing login with invalid data credential - Negative Case
        When I enter the username "usernameFalse" and password "secret_sauce"
        And I click button login
        Then displaying username or password is incorrect

    @negative
    Scenario: Missing login with invalid columnn username and password empty - Negative Case
        When I click button login
        Then I username column is required

    @negative
    Scenario: Missing login with invalid columnn password empty - Negative Case
        When I enter the username "usernameFalse"
        And I click button login
        Then displaying mandatory password information