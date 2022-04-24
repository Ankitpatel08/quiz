import './header.scss';

export default class Header {
    constructor() {
        this.headerEl = document.querySelector('header');
        global.util.dom.injectMarkup(this.headerEl, this.formatMarkup());

        // DOM element cache
        this.navBurgerEl = this.headerEl.querySelector('.navbar-burger');
        this.addEventListeners();
    }

    formatMarkup() {
        return (`
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="/">
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
                            <a class="button is-primary" href="/signup">
                                <strong>Sign up</strong>
                            </a>
                            <a class="button is-light" href="/login">
                                Log in
                            </a>
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
    }
}