import '../scss/admin.scss';
import data from '../data/data.json';
import FormBuilder from '../../../components/form-builder/form-builder';

class Admin {
    constructor() {
        this.formEl = document.querySelector('#addQuestion');

        this.initialize();
        this.addEventListeners();
    }

    initialize() {
        this.FormBuilder = new FormBuilder({
            el: this.formEl,
            data: data.addQuestions,
        });
    }

    addEventListeners() {
        this.formEl.addEventListener('submit', async (event) => {
            event.preventDefault();

            const formData = new FormData(this.formEl);
            let response = await global.util.callService('addQuestion', Object.fromEntries(formData));

            console.log(response);
        });
    }
}

new Admin();
