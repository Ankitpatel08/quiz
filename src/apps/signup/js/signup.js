import '../scss/signup.scss';
import Hero from '../../../components/hero/hero';
import AppInfo from '../../../components/app-info/app-info';
import FormBuilder from '../../../components/form-builder/form-builder';

class Signup {
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
                title: 'Register here',
                subTitle: 'create account in seconds',
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

new Signup();
