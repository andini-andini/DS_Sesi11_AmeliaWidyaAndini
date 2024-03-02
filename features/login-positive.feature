@digital-skola @login
Feature: Swag Labs - Login - positive

  @positive
  Scenario: As a standard_user, I want to log in successfully
    Given Amelia is on the login page
    When Amelia login with "standard_user" credential
    Then Amelia should see home page
    And Amelia add item to cart
    And Amelia should see cart page
    And Amelia should see home page again with a continue shopping button
    Then Amelia should see menu