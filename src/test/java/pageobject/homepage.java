package pageobject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class homepage {

	public WebDriver driver;
	
	@FindBy (xpath=("//input[@type='search']"))
	private  WebElement search;
	
	@FindBy (xpath=("//p[@class='product-name']"))
	private WebElement productname;
	
	@FindBy (xpath=("//a[@class='increment']"))
	private WebElement increment;
	
	@FindBy (xpath=("//button[contains(text(), 'ADD TO CART')]"))
	private WebElement addtocart;
	
	
	@FindBy (xpath=("//img[@alt='Cart']"))
	private WebElement cartimage;
	
	@FindBy (xpath=("//button[contains(text(), 'PROCEED TO CHECKOUT')]"))
	private WebElement proceedchkout;
	
	
	// here driver has no life. So the driver we got in the stpe defination has to pass here.Because
	// driver in stepdefination has knowledge of driver which it got from base class. For that we have
	// create a constructor here. so we can pass the driver in this class.
	
	//you need to expect a driver. there is a webdriver driver which will be passed to your test. We need
	// to create a local driver here.
	
	//**** whoever creates a object for this class must pass a driver argument as part of their 
	// object creation. 
	// this.driver refers to current class driver with real driver what we got from stepdefination
	
	public homepage(WebDriver driver) {
		// driver object which has life is passed here.
		this.driver=driver;
		PageFactory.initElements(driver,this);
	}
	
	
	
	
	
	
	
	
	
	
	public WebElement searchveg() {
		return search;
		
		
	}
	public WebElement getproductname() {
		return productname;
		
		
	}
	
	public WebElement increment() {
		return increment;
		
		
	}
	public WebElement addtocart() {
		return addtocart;
		
		
	}
	
	public WebElement cartimage() {
		return cartimage;
		
		
	}
	
	public WebElement proceedchkout() {
		return proceedchkout;
		
		
	}

	
	
	
	
	
}
