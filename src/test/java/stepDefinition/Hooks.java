package stepDefinition;

import com.FinalBehaviorDriven.CucumberFramework.Base;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends Base {

	
@Before("@Mobile")

public void beforevalidation(){
	System.out.println("This is before Mobile Test not Execution");
}

@After("@Practice")
public void closebrowser(){
	driver.close();
}


@Before("@Regression")

public void beforeRegressionvalidation(){
System.out.println("This is before Regression Test Execution");
}

@After("@Regression")
public void AfterRegression(){
System.out.println("This is after Regression Test Execution");
}



}
