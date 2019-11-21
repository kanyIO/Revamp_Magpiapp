Feature: Logout
    @logout
    Scenario: Logging out the web app
        Given I want to logout
        When I select you are logged in as user
        And select Logout
        Then Logout will occur
