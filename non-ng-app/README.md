# Configuring Protractor to Run Non-Angular App. 


If you run a non-angular app with protractor, then it will error out. You can read more about this here- link

In order to run a non-angular app using protractor, we need some changes and we could actually do this in a couple of ways.

One of the ways is to directly use webdriver instance with `browser.driver` like this 

```javascript
browser.driver.get('http://localhost:8000/login.html');

browser.driver.findElement(by.id('username')).sendKeys('Jane');
browser.driver.findElement(by.id('password')).sendKeys('1234');
browser.driver.findElement(by.id('clickme')).click();
```
Reference this example from [Protractor docs](https://github.com/angular/protractor/blob/f52438549f7d920da1600199feaf58059d6fd692/spec/withLoginConf.js)

Another way is to have the code to set to `browser.ignoreSynchronization = true` before the `browser.get('')` 
initilization.


For example, in the file `non-ng-spec.js`, we have the following code

```javascript
describe('testing a non angular app', function() {
    
    it('should be testing a non angular app', function() {
        browser.ignoreSynchronization=true;
        browser.get("https://www.google.co.in/");
        var search =$("#lst-ib");  //this is the google search bar

        

        search.sendKeys("It's not easy");
        search.sendKeys(protractor.Key.ENTER);

        expect(search.getAttribute("value")).toEqual("It's not easy");

        browser.sleep(5000);
    });
        
});
```

Here we are using the second method, mentioned above, which will allow this to be run using protractor. 

If you run the `non-ng-conf.js` file using

`protractor non-ng-conf.js`

you will see protractor running your tests like a normal tests.
