import './footer.scss';

export default class Footer {
    constructor() {
        this.footerEl = document.querySelector('footer');
        global.util.dom.injectMarkup(this.footerEl, this.formatMarkup());
    }

    formatMarkup() {
        return (`
            <div class="content has-text-centered">
            <p>
                Legal | Privacy(c) 2022, Quiz. All Rights Reserved.
            </p>
            </div>
        `);
    }
}
