Feature: Sign up form
    I want to sign up to Vimeo

    Scenario: Create new user in Vimeo
        Given I am on the 'homepage'
        When I click 'join' button
        Then I should see 'join' form
        When I enter 'firstLastName' to 'Join' form input
        And I enter 'email' to 'Join' form input
        And I enter 'password' to 'Join' form input
        And I click 'joinEmail' button
        Then I should be on 'signUp' page
