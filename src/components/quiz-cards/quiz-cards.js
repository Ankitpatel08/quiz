import './quiz-cards.scss';

export default class QuizCards {
    constructor(options) {
        this.el = options.el;
        this.data = options.data;

        global.util.dom.injectMarkup(this.el, this.formatMarkup(this.data));
    }

    formatMarkup(data) {
        return (`
            ${this.generateCards(data)}
        `);
    }

    generateCards(cards) {
        let cardsMarkup = '';

        cards.forEach(card => {
            cardsMarkup += `<div class="card" data-code="${card.code}">
                <div class="card-content">
                    <p class="title">
                        ${card.label}
                    </p>
                </div>
                <footer class="card-footer">
                    <p class="card-footer-item">
                        <span>Go To Quiz</span>
                    </p>
                </footer>
            </div>`
        });

        return cardsMarkup;
    }
}
