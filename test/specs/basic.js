describe('DuckDuckGo search', () => {
    it('searches for WebdriverIO', () => {
        browser.goto('https://duckduckgo.com');

        $('#search_form_input_homepage').waitAndSetValue('WebDriverIO');
        $('#search_button_homepage').waitAndClick();

        const title = browser.getTitle();
        console.log('Title is: ' + title);
        //outputs: "Title is: WebdriverIO at DuckDuckGo"
        title.should.be.equal('WebDriverIO at DuckDuckGo');
    })
})