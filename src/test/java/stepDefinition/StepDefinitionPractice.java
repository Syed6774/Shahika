package stepDefinition;

import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.FinalBehaviorDriven.CucumberFramework.Base;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;
import junit.framework.Assert;
import pageobject.homepage;


@RunWith(Cucumber.class)

public class StepDefinitionPractice {
	
	public WebDriver driver;
	
	public homepage hm;
	@Given("^user is landed on the page$")
    public void user_is_landed_on_the_page() throws Throwable {
		driver=Base.getbrowser();
		
		
		
		
	    	
    }
	@When("^user search for (.+) vegetable$")
    public void user_search_for_vegetable(String name) throws Throwable {
		hm= new homepage(driver);
    	hm.searchveg().sendKeys(name);
    	Thread.sleep(2000);
    	
        
    }
   
   
    	//driver.findElement(By.xpath("//input[@type='search']")).sendKeys(strArg1);
    	
    	
    	
    
    
    @And("^added items to cart$")
    public void added_items_to_cart() throws Throwable {
    	
    	
    	
    	
    	driver.findElement(By.xpath("//a[@class='increment']")).click();
        driver.findElement(By.xpath("//button[contains(text(), 'ADD TO CART')]")).click();
    }

    @And("^user proceeded check out page for parches$")
    public void user_proceeded_check_out_page_for_parches() throws Throwable {
    	
    	driver.findElement(By.xpath("//img[@alt='Cart']")).click();
       driver.findElement(By.xpath("//button[contains(text(), 'PROCEED TO CHECKOUT')]")).click();
    }
   
    
    @Then("^verify selected (.+) items are displayed in checkout page$")
    public void verify_selected_items_are_displayed_in_checkout_page(String name) throws Throwable {
    	 Assert.assertTrue(driver.findElement(By.xpath("//h4[contains(text(),'Cucumber ')]")).getText().contains(name));
    	   
    }
	
	
	
	
}

	
	
	
	
	
	
	
	

