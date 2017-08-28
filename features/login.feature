Feature: Log in form
    I want to log in to Vimeo

    Scenario: Log in as a user in Vimeo
        Given I am on the 'homepage'
        When I click 'logIn' button
        Then I should see 'logIn' form
        When I enter 'email' to 'Login' form input
        And I enter 'password' to 'Login' form input
        And I click 'logInEmail' button
        Then I should be 'logged'
