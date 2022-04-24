import './hero.scss';

export default class Hero {
    constructor(options) {
        console.log(options);

        this.el = options.el;
        global.util.dom.injectMarkup(this.el, this.foramtMarkup(options.data));
    }

    foramtMarkup(data) {
        return (`
        <div class="hero-body">
            <div class="container">
            <h1 class="title">
                ${data.title}
            </h1>
            <h2 class="subtitle">
                ${data.subTitle}
            </h2>
            </div>
        </div>
        `);
    }
}