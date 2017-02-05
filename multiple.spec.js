describe("Protractor-Demo app",function(){
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var gobutton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));


    beforeEach(function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
    });
    it("should have a title",function(){
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    it("should correctly add two number",function(){
        firstNumber.sendKeys('100');
        secondNumber.sendKeys('200');

        gobutton.click();

        expect(latestResult.getText()).toEqual('300');
    });

});