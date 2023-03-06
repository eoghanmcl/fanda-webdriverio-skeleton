Feature: Kainos contact form

    Scenario Outline: As an end user, I would like to contact Kainos

        Given I open a browser and enter the Kainos URL <homepage>
        When I accept cookies <cookiespopup>
        When I open the contact form <contactpage>
        When I submit the contact form <submitform>
        Then I should see an error message that says <errormessage>

        Examples:
            | homepage                | cookiespopup | contactpage                       | submitform | errormessage            |
            | https://www.kainos.com/ |              | https://www.kainos.com/contact-us | Submit     | This field is required. |