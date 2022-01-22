package stepDefinition;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import com.FinalBehaviorDriven.CucumberFramework.Base;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pageobject.homepage;

public class StepDefinition extends Base {
	public WebDriver driver;
	public homepage hm;
	
	 @Given("^user is on Netbanking landing page$")
	    public void user_is_on_netbanking_landing_page() throws Throwable {
	       System.out.println("Test Case 1");
	      
	       
	    }
@When("^user login into application with \"([^\"]*)\" and \"([^\"]*)\"$")
	    public void user_login_into_application_with_something_and_something(String strArg1, String strArg2) throws Throwable {
	       
		 System.out.println(strArg1+strArg2);
		    System.out.println("Hello"
		 
		 
	    }
@Given("^user has access to the application$")
public void user_has_access_to_the_application() throws Throwable {
    System.out.println("BACKGROUND: USER HAS ACCESS TO THE APPLICATION");
}

@When("^Browser is launched$")
public void browser_is_launched() throws Throwable {
	 System.out.println("BACKGROUND:BROWSER IS NOT LAUNCHED");
}

@Then("^user should be able to nagivate to EPIC URL$")
public void user_should_be_able_to_nagivate_to_epic_url() throws Throwable {
	 System.out.println("BACKGROUND: USER SHOULD BE ABLE TO NAVIGATE TO EPIC URL");
}

	    @Then("^Home page is populated$")
	    public void home_page_is_populated() throws Throwable {
	    	System.out.println("Test Case 3");
	    }

	    @And("^cards displayed are \"([^\"]*)\"$")
	    public void cards_displayed_are_something(String strArg1) throws Throwable {
	      System.out.println(strArg1);
	    }
	    @When("^user signup with following details$")
	    public void user_signup_with_following_details(DataTable data) throws Throwable {
	         List<List<String>> obj = data.raw();
	        System.out.println(obj.get(0).get(0));
	        System.out.println(obj.get(0).get(1));
	    	
	    	
	    }
	    @Given("^user has access to Erica Application$")
	    public void user_has_access_to_erica_application() throws Throwable {
	    	System.out.println("mOBILE ");
	    }

	    @When("^user login into the application using appium$")
	    public void user_login_into_the_application_using_appium() throws Throwable {
	    System.out.println("mOBILE ");
	    }

	    @Then("^user should be able to launch on ERICA APP$")
	    public void user_should_be_able_to_launch_on_erica_app() throws Throwable {
	    	System.out.println("mOBILE ");
	    }
	    
	    @When("^user login into the application with (.+) and (.+)$")
	    public void user_login_into_the_application_with_and(String username, String password) throws Throwable {
	        System.out.println(username);
	        System.out.println(password);
	        
	    }
	    
	    
	    
	    @Given("^User can create a NF ACH Claim in Bolt$")
	    public void user_can_create_a_nf_ach_claim_in_bolt() throws Throwable {
	    	System.out.println("User can create a NF ACH Claim in Bolt");
	    }

	    @When("^User Search the claim in Epic$")
	    public void user_search_the_claim_in_epic() throws Throwable {
	    	System.out.println("User Seach the claim in Epic");
	    }

	    @Then("^User should be able to see the claim details in epic$")
	    public void user_should_be_able_to_see_the_claim_details_in_epic() throws Throwable {
	    	System.out.println("User should be able to view the claim details");
	    	
	    }

	    @And("^Take action on the claim$")
	    public void take_action_on_the_claim() throws Throwable {
	    	System.out.println("Take action on the claim");
	    }
	    
	    
	    
	    @Then("^verify selected \"([^\"]*)\" items are displayed in checkout page$")
	    public void verify_selected_something_items_are_displayed_in_checkout_page(String strArg1) throws Throwable {
	    	 
	    	hm = new homepage(super.driver);
	   Assert.assertTrue(hm.getproductname().getText().contains(strArg1));
	    	//Assert.assertTrue(driver.findElement(By.xpath("//p[@class='product-name']")).getText().contains(strArg1));
	    }


}
