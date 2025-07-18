Feature: User Login
  As a system user
  I want to log into the platform
  So that I can access the products area

  Scenario: Login with valid credentials (happy path)
    Given I am on the login page
    When I fill in the username with "standard_user"
    And I fill in the password with "secret_sauce"
    And I click the login button
   

  Scenario: Login with incorrect username (negative test)
    Given I am on the login page
    When I fill in the username with "standa"
    And I fill in the password with "secret_sauce"
    And I click the login button
    Then I should see an error message

  Scenario: Login with incorrect password (negative test)
    Given I am on the login page
    When I fill in the username with "standard_user"
    And I fill in the password with "secret"
    And I click the login button
    Then I should see an error message

  Scenario: Login with partial input (alternative path)
    Given I am on the login page
    When I fill in the username with "standard"
    And I fill in the password with "secret"
    And I click the login button
    Then I should see an error message
