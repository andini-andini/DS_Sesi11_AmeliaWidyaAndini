@digital-skola @login
Feature: Swag Labs - Login - negative

  @negative
  Scenario: As a locked_out_user, I want to log in successfully
    Given Amelia is on the login page
    When Amelia login with "locked_out_user" credential
    Then Amelia should see error "Epic sadface: Sorry, this user has been locked out"