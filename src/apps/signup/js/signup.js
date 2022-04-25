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
        this.formEl.addEventListener('submit',async (event) => {
            event.preventDefault();
            const formData = new FormData(this.formEl);

            let formDataObj = global.util.func.serialize(formData);

            let response = await global.util.callService('signup', formDataObj);
            console.log(response);
            console.log(formDataObj);

            window.location.href = '/login';
        });
    }
}

new Signup();
