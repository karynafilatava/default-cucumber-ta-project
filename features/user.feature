@user
Feature: User profile iteractions
  I want to sign up to Vimeo
  I want to log in to Vimeo

  @signup
  Scenario: Create new user in Vimeo
    Given I am on the 'home' page
    When I click 'join' button
    Then I should see 'join' form
    When I enter 'firstLastName' to 'Join' form input
    And I enter 'email' to 'Join' form input
    And I enter 'password' to 'Join' form input
    And I click 'joinEmail' button
    Then I should be on 'membershipChoosing' page

  @login
  Scenario: Log in as a user in Vimeo
    Given I am on the 'home' page
    When I click 'logIn' button
    Then I should see 'logIn' form
    When I enter 'email' to 'Login' form input
    And I enter 'password' to 'Login' form input
    And I click 'logInEmail' button
    Then I should be 'logged'
