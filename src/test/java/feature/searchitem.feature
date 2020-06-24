Feature: Search Functionality

@Practice
Scenario: Search items from search bar
Given user is landed on the page
When user search for Cucumber vegetable



@Practice
Scenario Outline: Search items and than move to checkout page
Given user is landed on the page
When user search for <Name> vegetable
And added items to cart
And user proceeded check out page for parches
Then verify selected <Name> items are displayed in checkout page 

Examples:
|Name|
|Brinjel|
|Beetroot|
