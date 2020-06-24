Feature: Application Login Functionality
Background:
Given user has access to the application
When Browser is launched
Then user should be able to nagivate to EPIC URL

@Smoke
Scenario: home page default login
Given user is on Netbanking landing page
When user login into application with "usnername" and "password"
Then Home page is populated
And cards displayed are "true"
@Regression
Scenario: home page default login
Given user is on Netbanking landing page

And cards displayed are "false"
@Mobile
Scenario: Login with mobile Application
Given user has access to Erica Application
When user login into the application using appium
Then user should be able to launch on ERICA APP

@Smoke
Scenario: home page default login
Given user is on Netbanking landing page
When user signup with following details
|jenny|abcd|hoque@gmail.com|Australia|3425|
Then Home page is populated
And cards displayed are "false"

@Smoke
Scenario Outline: home page default login
Given user is on Netbanking landing page
When user login into the application with <Username> and <password>
Then Home page is populated
iki cards displayed are "false"9mo99\

Examples:
|Username |password|Account Name|password|
|user 1   |pass1|
|user 2   |pass2|
|user 3   |pass3|
|user 4   |pass4|
