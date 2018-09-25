Feature: Request for a demo from VueOrg Home page

  In order to request a demo
  As a customer of OrgVue
  I should have a provision on the Home Page


  @TC01_RequestDemoTest     @RegressionTest
  Scenario:  To check the user is able to fill all fields available in the Demo Request form
    Given I am customer of VueOrg
    When I navigate to the VueOrg home page
    And Click on 'GET A DEMO' button on the top right of the page
    Then System should display the popup page to request the demo
    When I fill fill all the available fields on the page as below
      |RAKESH|CHOORIKKADU|TEST AUTOMATION QA|CONCENTRA|rakeshnambiar.c@gmail.com|+44751110000|UNITED KINGDOM|ASAP|
    Then System should populates the user entered values

  @TC02_KnowledgeBaseTest     @RegressionTest
  Scenario: To verify the Author name and Date in the Knowledge Base Search Results
    Given I am customer of VueOrg
    When I navigate to the VueOrg home page
    And Clicks on 'CONTACT' button from the top menu
    And Clicks on 'VISIT KNOWLDGE BASE' option from Contact page
    And Search with the keywork "Test"
    Then I should see multiple results on the screen
    When I choose the first item from the results page
    Then I should see the below information on the detail page
      |Rob Hatley|2018|
