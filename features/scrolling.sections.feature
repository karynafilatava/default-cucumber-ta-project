@scroll
Feature: Animations on main page
  I want be able to scroll page and see different sections

  Background: Going to Home page
    Given I am on the 'home' page

  Scenario Outline: Scrolling page and check visible elements
    When I scroll down '<count>' time(s)
    Then '<section>' should be visible
    When I scroll up
    Then '<section>' should be invisible

    Examples:
      | section      | count |
      | phonePicture | 5.5   |
      | sliding      | 6.3   |
      | video_ctrl   | 7.5   |
      | features     | 10.5  |
      | video        | 14.5  |
      | soundtracks  | 18.5  |
      | videolist    | 23.5  |
      | creators     | 28.5  |