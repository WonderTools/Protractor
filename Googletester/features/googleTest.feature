#features/googletest.feature
Feature: Running Cucumber with Protractor
    As a user of Protractor
    I should be able to use Cucumber
    In Order to test run

    Scenario: Protractor and Cucumber Test
        Given I go to Google Home Page
        Then Google Home Page is loaded
        When I click on search input and enter "Protractor"
        Then I should see all the search results for "Protractor"