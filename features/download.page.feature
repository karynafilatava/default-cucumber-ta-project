Feature: Download page
  I want to be able to click download and see app's details

  @download
  Scenario: Validate details on download page
    Given I am on the 'home' page
    When I click 'download' button
    Then I should be on 'itunes' page
    And I should see valid 'title' info
    And I should see valid 'updated' info
    And I should see valid 'version' info
    And I should see valid 'size' info