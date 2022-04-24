import '../scss/login.scss';
import Hero from '../../../components/hero/hero';
import AppInfo from '../../../components/app-info/app-info';
import FormBuilder from '../../../components/form-builder/form-builder';

class Login {
    constructor() {
        this.heroEl = document.querySelector('.hero');
        this.infoEl = document.querySelector('.app-info');
        this.formEl = document.querySelector('#signupForm');

        this.initialize();
    }

    initialize() {
        this.hero = new Hero({
            el: this.heroEl,
            data: {
                title: 'Login Page',
                subTitle: 'Login to begin',
            },
        });

        this.appInfo = new AppInfo({
            el: this.infoEl,
            data: {

            },
        });

        this.FormBuilder = new FormBuilder({
            el: this.formEl,
            data: {

            },
        });
    }
}

new Login();
