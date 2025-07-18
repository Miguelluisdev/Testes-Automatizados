Feature: Header menu navigation
  As a logged-in user
  I want to navigate through the header menu links
  So that I can access other parts of the site and log out

  Scenario: Navigating the header menu links
    Given I am logged in and on the inventory page
    When I open the header menu
    And I check the About link visibility and remove the target attribute
    And I click the Logout link
    Then I should see the login button
    And the URL should include "/v1/"


