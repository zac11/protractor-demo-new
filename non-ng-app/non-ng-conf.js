exports.config={
    framework: 'jasmine',
    seleniumAddress:"http://localhost:4444/wd/hub",
    specs:['non-ng-spec.js'],
    capabilities:{
        browserName:'chrome'
    }

}