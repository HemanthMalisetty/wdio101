import { expect } from 'chai';
import LoginPage from '../pageobjects/login.page.js';

describe('login form', () => {
    it('should deny access with wrong creds', () => {
        LoginPage.open();
        LoginPage.enterUsername('foo');
        LoginPage.enterPassword('bar');
        LoginPage.clickSubmitButton();

        expect($(LoginPage.flash).getText()).to.contain('Your username is invalid');
    });

    it('should allow access with correct creds', () => {
        LoginPage.open();
        LoginPage.enterUsername('tomsmith');
        LoginPage.enterPassword('SuperSecretPassword!');
        LoginPage.clickSubmitButton();

        expect($(LoginPage.flash).getText()).to.contain('You logged into a secure area!');
    });
});