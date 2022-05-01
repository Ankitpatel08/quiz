import '../scss/profile.scss';

class Profile {
    constructor() {
        this.user = {};
        this.userEl = document.querySelector('#user');

        if(!global.util.func.isLoggedIn()) {
            window.location.href = '/login';
        } 

        (async () => {
            let userId = global.util.func.localStorageGet('user').id;

            this.user = await global.util.callService('getUserDetails', {
                userId: userId,
            });

            this.initialize(this.user);
        })();
    }

    initialize(data) {
        console.log(data);
        global.util.dom.injectMarkup(this.userEl, this.formatMarkup(data));
    }

    formatMarkup(data) {
        return (`<div>
            <h2>${data.name}</h2>
            <h3>${data.email}</h3>

            <a class="button is-primary" href="/explroe-quiz">Quiz</a>
        </div>
        `);
    }
}

new Profile();
