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

    it('should add two more numbers',function(){
        firstNumber.sendKeys('600');
        secondNumber.sendKeys('300');

        gobtn.click();

        expect(latestResult.getText()).toEqual('900');
    });

    browser.takeScreenshot();
});