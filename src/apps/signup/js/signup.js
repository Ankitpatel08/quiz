import '../scss/signup.scss';
import data from '../data/data.json';
import Hero from '../../../components/hero/hero';
import AppInfo from '../../../components/app-info/app-info';
import FormBuilder from '../../../components/form-builder/form-builder';

class Signup {
    constructor() {
        this.heroEl = document.querySelector('.hero');
        this.infoEl = document.querySelector('.app-info');
        this.formEl = document.querySelector('#signupForm');

        this.initialize();
        this.addEventListeners();
    }

    initialize() {
        this.hero = new Hero({
            el: this.heroEl,
            data: data.hero,
        });

        this.appInfo = new AppInfo({
            el: this.infoEl,
            data: data.appInfo,
        });

        this.FormBuilder = new FormBuilder({
            el: this.formEl,
            data: data.signUp,
        });
    }

    addEventListeners() {
        this.formEl.addEventListener('submit', async (event) => {
            event.preventDefault();

            const formData = new FormData(this.formEl);
            formData.append('userId', 'u1');
            let response = await global.util.callService('signup', Object.fromEntries(formData));

            console.log('response', response);

            // window.location.href = '/login';
        });
    }
}

new Signup();
