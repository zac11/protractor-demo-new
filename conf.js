exports.config={
    framework: 'jasmine',
    seleniumAddress:"http://localhost:4444/wd/hub",
    specs:['third.spec.js'],
    capabilities:{
        browserName:'chrome'
    }
}