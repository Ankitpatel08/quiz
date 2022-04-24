import './app-info.scss';

export default class AppInfo {
    constructor(options) {
        this.el = options.el;

        global.util.dom.injectMarkup(this.el, this.formatMarkup(options.data)); 
    }

    formatMarkup(data) {
        return (`
        <div class="tile notification is-light">
            <div class="content">
                <h1 class="is-large">
                    <span class="icon has-text-info know-icon">
                    <em class="fas fa-info-circle"></em>
                    </span>
                    Did you know?
                </h1>
                <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere harum nam assumenda sit adipisci, minus incidunt, amet beatae facilis quidem nihil repudiandae laborum veritatis error quaerat ullam dolorum illum neque!
                </p>
            </div>
        </div>
        `);
    }
}