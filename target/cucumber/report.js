$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/feature/searchitem.feature");
formatter.feature({
  "line": 1,
  "name": "Search Functionality",
  "description": "",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Search items from search bar",
  "description": "",
  "id": "search-functionality;search-items-from-search-bar",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Practice"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is landed on the page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user search for Cucumber vegetable",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionPractice.user_is_landed_on_the_page()"
});
formatter.result({
  "duration": 13289135000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber",
      "offset": 16
    }
  ],
  "location": "StepDefinitionPractice.user_search_for_vegetable(String)"
});
formatter.result({
  "duration": 2538160100,
  "status": "passed"
});
formatter.after({
  "duration": 230525100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Search items and than move to checkout page",
  "description": "",
  "id": "search-functionality;search-items-and-than-move-to-checkout-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Practice"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user is landed on the page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user search for \u003cName\u003e vegetable",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "added items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user proceeded check out page for parches",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "verify selected \u003cName\u003e items are displayed in checkout page",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "search-functionality;search-items-and-than-move-to-checkout-page;",
  "rows": [
    {
      "cells": [
        "Name"
      ],
      "line": 19,
      "id": "search-functionality;search-items-and-than-move-to-checkout-page;;1"
    },
    {
      "cells": [
        "Brinjel"
      ],
      "line": 20,
      "id": "search-functionality;search-items-and-than-move-to-checkout-page;;2"
    },
    {
      "cells": [
        "Beetroot"
      ],
      "line": 21,
      "id": "search-functionality;search-items-and-than-move-to-checkout-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "Search items and than move to checkout page",
  "description": "",
  "id": "search-functionality;search-items-and-than-move-to-checkout-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Practice"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user is landed on the page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user search for Brinjel vegetable",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "added items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user proceeded check out page for parches",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "verify selected Brinjel items are displayed in checkout page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionPractice.user_is_landed_on_the_page()"
});
formatter.result({
  "duration": 10100506700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brinjel",
      "offset": 16
    }
  ],
  "location": "StepDefinitionPractice.user_search_for_vegetable(String)"
});
formatter.result({
  "duration": 2433243700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionPractice.added_items_to_cart()"
});
formatter.result({
  "duration": 107588200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@class\u003d\u0027increment\u0027]\"}\n  (Session info: chrome\u003d83.0.4103.106)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00274.0.0-alpha-1\u0027, revision: \u0027d1d3728cae\u0027, time: \u00272019-04-24T13:42:21\u0027\nSystem info: host: \u0027TANIM\u0027, ip: \u0027192.168.1.215\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\syed\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:60057}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: b3c739a28f8d16902103ae9d3874827e\n*** Element info: {Using\u003dxpath, value\u003d//a[@class\u003d\u0027increment\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:190)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:124)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:51)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:577)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:328)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:446)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:320)\r\n\tat stepDefinition.StepDefinitionPractice.added_items_to_cart(StepDefinitionPractice.java:58)\r\n\tat ✽.And added items to cart(src/test/java/feature/searchitem.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinitionPractice.user_proceeded_check_out_page_for_parches()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Brinjel",
      "offset": 16
    }
  ],
  "location": "StepDefinitionPractice.verify_selected_items_are_displayed_in_checkout_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 228602800,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search items and than move to checkout page",
  "description": "",
  "id": "search-functionality;search-items-and-than-move-to-checkout-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Practice"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user is landed on the page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user search for Beetroot vegetable",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "added items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user proceeded check out page for parches",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "verify selected Beetroot items are displayed in checkout page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionPractice.user_is_landed_on_the_page()"
});
formatter.result({
  "duration": 10189461500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Beetroot",
      "offset": 16
    }
  ],
  "location": "StepDefinitionPractice.user_search_for_vegetable(String)"
});
formatter.result({
  "duration": 2442349000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionPractice.added_items_to_cart()"
});
formatter.result({
  "duration": 289485700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionPractice.user_proceeded_check_out_page_for_parches()"
});
formatter.result({
  "duration": 236403100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Beetroot",
      "offset": 16
    }
  ],
  "location": "StepDefinitionPractice.verify_selected_items_are_displayed_in_checkout_page(String)"
});
formatter.result({
  "duration": 25697500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h4[contains(text(),\u0027Cucumber \u0027)]\"}\n  (Session info: chrome\u003d83.0.4103.106)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00274.0.0-alpha-1\u0027, revision: \u0027d1d3728cae\u0027, time: \u00272019-04-24T13:42:21\u0027\nSystem info: host: \u0027TANIM\u0027, ip: \u0027192.168.1.215\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\syed\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:60085}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: dfc6cf1d8566d2b7c88f4ad0deeb5392\n*** Element info: {Using\u003dxpath, value\u003d//h4[contains(text(),\u0027Cucumber \u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:190)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:124)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:51)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:577)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:328)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:446)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:320)\r\n\tat stepDefinition.StepDefinitionPractice.verify_selected_items_are_displayed_in_checkout_page(StepDefinitionPractice.java:72)\r\n\tat ✽.Then verify selected Beetroot items are displayed in checkout page(src/test/java/feature/searchitem.feature:16)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 276564000,
  "status": "passed"
});
});