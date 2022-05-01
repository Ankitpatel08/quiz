import './header.scss';

export default class Header {
    constructor() {
        this.headerEl = document.querySelector('header');
        this.isLoggedIn = global.util.func.isLoggedIn();
        global.util.dom.injectMarkup(this.headerEl, this.formatMarkup());

        // DOM element cache
        this.navBurgerEl = this.headerEl.querySelector('.navbar-burger');
        this.logoutCta = this.headerEl.querySelector('.logout')
        this.addEventListeners();
    }

    formatMarkup() {
        return (`
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="/home">
                        <h1> Quiz </h1>
                    </a>

                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarQuiz">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarQuiz" class="navbar-menu">
                    <div class="navbar-start"></div>

                    <div class="navbar-end">
                        <div class="buttons">
                            ${!this.isLoggedIn ? `<a class="button is-info" href="/signup">
                                <strong>Sign up</strong>
                            </a>
                            <a class="button is-light" href="/login">
                                Log in
                            </a>`: ''}
                            ${this.isLoggedIn ? `
                                <button class="button is-info logout"> Logout </button>
                            ` : ''}
                        </div>
                    </div>
                </div>
            </nav>
        `);
    }

    addEventListeners() {
        this.navBurgerEl.addEventListener('click', () => {
            const target = this.navBurgerEl.dataset.target;

            this.navBurgerEl.classList.toggle('is-active');
            this.headerEl.querySelector(`#${target}`).classList.toggle('is-active');
        });

        this.logoutCta && this.logoutCta.addEventListener('click', event => {
            global.util.func.localStorageRemove('user');
            window.location.href = '/login';
        });
    }
}
