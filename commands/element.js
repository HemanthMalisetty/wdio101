module.exports = {
    waitAndSetValue: function(value) {
        this.waitForDisplayed();
        this.setValue(value);
    },

    waitAndClick: function() {
        this.waitForDisplayed();
        this.click();
    }
}