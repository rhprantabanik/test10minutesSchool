const { Builder, Browser, By, Key, until } = require('selenium-webdriver');
//const chrome= require("selenium-webdriver/chrome");

async function testRun(){

    let driver = await new Builder().forBrowser("chrome").build();

    await driver.manage().window().maximize();
    await driver.get("https://10minuteschool.com/");
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//input[@placeholder='স্কিলস কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন...']")).click();
    await driver.findElement(By.xpath("//input[@placeholder='স্কিলস কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন...']")).sendKeys('ielts');
    await driver.findElement(By.xpath("//input[@placeholder='স্কিলস কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন...']")).sendKeys(Key.ENTER);
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//a[@href='/product/ielts-reading-and-listening-mock-tests/']")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//button[contains(text(),'কোর্সটি কিনুন')]")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//span[contains(text(),' শুরু করুন ')]")).click();
    await driver.sleep(2000);
    await driver.findElement(By.css(".tenms-field")).click();
    await driver.findElement(By.xpath("//input[@name='username']")).sendKeys('prantabanik2752@gmail.com');
    await driver.sleep(1000);
    await driver.findElement(By.xpath("//span[contains(text(),' এগিয়ে যান ')]")).click();

    await driver.sleep(5000);

    await driver.quit();

}
testRun();