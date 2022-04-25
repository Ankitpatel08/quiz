import './form-builder.scss';

export default class FormBuilder {
    constructor(options) {
        this.el = options.el;
        global.util.dom.injectMarkup(this.el, this.formatMarkup(options.data));
    }

    formatMarkup(data) {
        return (`
            ${this.generateFields(data.fields)}
            <div class="field">
                <div class="control">
                    <button type="submit" class="button ${data.submit.className}">${data.submit.btnLabel}</button>
                </div>
            </div>
        `);
    }

    generateFields(data) {
        let fieldsMarkup = ``;

        if (data && data.length) {
             data.forEach(field => {
                fieldsMarkup += `<div class="field">
                    <label class="label">${field.label}</label>
                    <div class="control ${field.iconClass && 'has-icons-left'}">
                        <input class="input" type="${field.type}" placeholder="${field.placeholder}" name="${field.id}" />
                        ${field.iconClass && `<span class="icon is-small is-left">
                                                  <em class="fas ${field.iconClass}"></em>
                                              </span>`
                        }
                    </div>
                </div>`;
            });
        }

        return fieldsMarkup;
    }
}
