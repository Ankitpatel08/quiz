import '../scss/profile.scss';

class Profile {
    constructor() {
        this.user = {};
        this.userEl = document.querySelector('#user');

        (async () => {
            this.user = await global.util.callService('getUserDetails', {
                userId: 'u1',
            });

            this.initialize(this.user);
        })();
    }

    initialize(data) {
        global.util.dom.injectMarkup(this.userEl, this.formatMarkup(data));
    }

    formatMarkup(data) {
        return (`<div>
            <h2>${data.name}</h2>
            <h3>${data.email}</h3>
        </div>
        `);
    }
}

new Profile();
