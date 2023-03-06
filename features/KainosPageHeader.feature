Feature: Kainos homepage

    Scenario Outline: As an end user, I would like to open the Kainos homepage

        Given I open a browser and enter the Kainos URL <homepage>
        When I accept cookies <cookiespopup>
        Then I should see the page header <pageheader>

        Examples:
        | homepage                | cookiespopup | pageheader                              |
        | https://www.kainos.com/ |              | True partners change the world together |