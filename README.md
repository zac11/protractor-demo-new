#####protractor-demo-new

protractor is an e2e (end-to-end) testing framework used for testing angular applications.


# SetUp :

To set up protractor on your system, you need to have npm installed first. See this link on how to install npm.

Once you have npm, you can install Protactor globally with 

`npm install -g protactor`

Installing npm with a `-g` command will install the npm globally. Once you have run the protractor from npm, it would install two command line tools

```
protractor

webdriver-manager

```
In order to check whether your protractor is working, you can run `protractor --version` to check the version which should give an output like

```
Rahuls-Air:non-ng-app zac01$ protractor --version
Version 4.0.14
```



# Starting Webdriver

In order to run your tests, you need to start the webdriver in order to be able to run the webdriver instance.

At first you need to run 
`webdriver-manager update`

so that the `wedriver-manager` downloads the latest required binaries. Once this is completed, run

`webdriver-manager start`

to have the webdriver instance start. This would give you an out put like 

```
[13:17:55] I/start - java -Dwebdriver.chrome.driver=/usr/local/lib/node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_2.26 -Dwebdriver.gecko.driver=/usr/local/lib/node_modules/protractor/node_modules/webdriver-manager/selenium/geckodriver-v0.11.1 -jar /usr/local/lib/node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-2.53.1.jar -port 4444
[13:17:55] I/start - seleniumProcess.pid: 52665
13:17:55.826 INFO - Launching a standalone Selenium Server
13:17:55.867 INFO - Java: Oracle Corporation 25.111-b14
13:17:55.867 INFO - OS: Mac OS X 10.12.3 x86_64
13:17:55.879 INFO - v2.53.1, with Core v2.53.1. Built from revision a36b8b1
13:17:55.954 INFO - Driver provider org.openqa.selenium.ie.InternetExplorerDriver registration is skipped:
registration capabilities Capabilities [{ensureCleanSession=true, browserName=internet explorer, version=, platform=WINDOWS}] does not match the current platform MAC
13:17:55.955 INFO - Driver provider org.openqa.selenium.edge.EdgeDriver registration is skipped:
registration capabilities Capabilities [{browserName=MicrosoftEdge, version=, platform=WINDOWS}] does not match the current platform MAC
13:17:55.955 INFO - Driver class not found: com.opera.core.systems.OperaDriver
13:17:55.955 INFO - Driver provider com.opera.core.systems.OperaDriver is not registered
13:17:55.958 INFO - Driver class not found: org.openqa.selenium.htmlunit.HtmlUnitDriver
13:17:55.958 INFO - Driver provider org.openqa.selenium.htmlunit.HtmlUnitDriver is not registered
13:17:56.035 INFO - RemoteWebDriver instances should connect to: http://127.0.0.1:4444/wd/hub
13:17:56.035 INFO - Selenium Server is up and running

```

Your Protractor test will send requests to this server to control a local browser. You can see information about the status of the server at http://localhost:4444/wd/hub.


# Simple Test


If you are using any IDE, you can open a new file in it or if you are using a simple text editor, it is fine too. You can use anyone, it actually doesn't matter. 

For, me, the choice of editor has been VSCODE, so I would be demonstrating the code in it.

Create a new File in and name is `conf.js` and another file in the same directory named as `spec.js`. Both of these are of `*.js` extension- which means these are .js files.

Now, for protractor to work, you need to have a specification file, called the `spec.js` and the configuration file, called the `conf.js`.

Now, as a part of our tests, we want to test whether the calculator in the given link [Calculator](http://juliemr.github.io/protractor-demo/'), is working correctly, We would use a couple of elements recognize them, click on buttons and etc.

Copy the following code in your `spec.js` file
```javascript
describe("Protractor Demo App",function(){
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var gobtn =element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));

    beforeEach(function(){
        browser.get('http://juliemr.github.io/protractor-demo/');

    });

    it("should have a title",function(){
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    it('should add two numbers',function(){
        firstNumber.sendKeys('200');
        secondNumber.sendKeys('300');

        gobtn.click();

        expect(latestResult.getText()).toEqual('500');
    });
    ```
 

If you're confused by the ```describe``` and the ```it``` syntax, then you should probably read the `jasmine` framework first to know how protractor leverages the power of `jasmine` to run tests.


# Configuration

In order for the protractor to run, it need the configuration file to tell where the `spec.js` file is stored. So this is something that we would specify in the `conf.js` file that we have had created earlier.

Copy the following code in `conf.js`

```javascript
exports.config={
    framework: 'jasmine',
    seleniumAddress:"http://localhost:4444/wd/hub",
    specs:['spec.js'],
    capabilities:{
        browserName:'chrome'
    }
}
```

The various parameters defined in the configuration files are specific to this test and tells the protractor under which configuration to run the tests. `framework` tells this that the `jasmine` framework is used. You can also use another framework `chai` in place of `jasmine`. 

`specs` tells protractor which spec file to run for this set of tests and `seleniumAddress` tells the server address where the server would be listening to the requests.


# Running Tests


In order to run your tests, you need to run this command from your terminal

`protractor conf.js`

and you should see your tests in action.
 
