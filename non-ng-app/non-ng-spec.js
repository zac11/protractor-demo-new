
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
    