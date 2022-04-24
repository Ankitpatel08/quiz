export function setAttribute(el, attribute, value) {
    if (el.getAttribute(attribute) === value) {
        return;
    }

    el.setAttribute(attribute, value);
}

export function setStyle(el, styleName, value) {
    if (el.style[styleName] === value) {
        return;
    }

    el.style[styleName] = value;
}

export function injectMarkup(wrapperEl, markup) {
    wrapperEl.insertAdjacentHTML('afterbegin', markup);
}

class DomHelpers {
    constructor() {
        this.setAttribute = setAttribute;
        this.setStyle = setStyle;
        this.injectMarkup = injectMarkup;
    }
}

export default DomHelpers;
