Feature: Application Login Functionality
Background:
Given user has access to the application
When Browser is launched
Then user should be able to nagivate to EPIC URL


@Sanity
Scenario: home page default login
Given user is on Netbanking landing page
When user login into application with "Zohan" and "ZohanSyed"
Then Home page is populated
And cards displayed are "true"

@Sanity
Scenario: Account page  login
Given User can create a NF ACH Claim in Bolt
When User Search the claim in Epic
Then User should be able to see the claim details in epic
And Take action on the claim

