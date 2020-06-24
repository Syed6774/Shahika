package com.FinalBehaviorDriven.CucumberFramework;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Base {
	
	public static WebDriver driver;
	public static Properties prop;
	
	
	public static WebDriver getbrowser() throws IOException {
		
		 prop= new Properties();
		 FileInputStream fis= new FileInputStream("C:\\Users\\syed\\eclipse-workspace\\CucumberFramework\\src\\test\\java\\com\\FinalBehaviorDriven\\CucumberFramework\\global.properties");
		 prop.load(fis);
		 System.setProperty("Webdriver.chrome.driver","C:\\Users\\syed\\eclipse-workspace\\CucumberFramework\\Driver\\chromedriver.exe");
		 driver= new ChromeDriver();
		 driver.get(prop.getProperty("url"));
		 driver.manage().window().maximize();
		 return driver;
	}

}
