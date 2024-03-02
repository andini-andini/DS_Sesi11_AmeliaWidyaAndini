import { $, expect } from '@wdio/globals'
import Page from './page.js';

const element = {
    fieldUsername: $('#user-name'),
    fieldPassword: $('#password'),
    btnLogin: $('#login-button'),
    errorLokedUser: (dynamicMessage) => $(`//h3[text()="${dynamicMessage}"]`)
}

class LoginPage extends Page {

    async login(username) {
        await element.fieldUsername.waitForDisplayed({ timeout: 2500 });
        await element.fieldUsername.setValue(username);
        await element.fieldPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
        await element.btnLogin.click();
    }

    async validateLockedOutUserError(dynamicMessage) {
        await element.errorLokedUser(dynamicMessage).waitForDisplayed({ timeout: 2500 });
        expect(element.errorLokedUser(dynamicMessage)).toBeDisplayed()
    }

    open() {
        return super.open('/');
    }
}

export default new LoginPage();
