import './form-builder.scss';

export default class FormBuilder {
    constructor(options) {
        this.el = options.el;
        global.util.dom.injectMarkup(this.el, this.formatMarkup(options.data)); 
    }

    formatMarkup(data) {
        return (`
        <div class="field">
            <label class="label">Name</label>
            <div class="control">
            <input class="input" type="text" placeholder="your name" name="name" />
            </div>
        </div>

        <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
            <input class="input" type="email" placeholder="email@valid.ok" name="email" />
            <span class="icon is-small is-left">
                <em class="fas fa-envelope"></em>
            </span>
            <span class="icon is-small is-right has-text-success">
                <em class="fas fa-check"></em>
            </span>
            </div>
        </div>

        <div class="field">
            <label class="label">Password</label>
            <div class="control has-icons-left has-icons-right">
            <input class="input" type="password" placeholder="****" name="password" />
            <span class="icon is-small is-left">
                <em class="fas fa-key"></em>
            </span>
            <span class="icon is-small is-right has-text-success" *ngIf="registerForm['controls'].password.valid">
                <em class="fas fa-check"></em>
            </span>
            </div>
        </div>

        <div class="field">
            <div class="control">
            <button type="submit" class="button is-primary is-large is-fullwidth" [disabled]="!registerForm.valid">Register now</button>
            </div>
        </div>
        `);
    }
}