import Page from './page.js';

class LoginPage extends Page {

    get username() { return '#username' };
    get password() { return '#password' };
    get submitBtn() { return 'form button[type="submit"]' };
    get flash() { return '#flash' };
    get headerLinks() { return '#header a' };

    open() {
        super.open('http://the-internet.herokuapp.com/login')
    };

    enterUsername(username) {
        $(this.username).waitAndSetValue(username);
    };

    enterPassword(password) {
        $(this.password).waitAndSetValue(password);
    };

    clickSubmitButton() {
        $(this.submitBtn).waitAndClick();
    };
}

export default new LoginPage();
