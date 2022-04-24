import './quiz.scss';

export default class Quiz {
    constructor(options) {
        this.el = options.el;
        this.quizData = options.data;

        global.util.dom.injectMarkup(this.el, this.formatMarkup(this.quizData));

        this.addEventListeners();
    }

    formatMarkup(data) {
        return (`
            <form id="quizFormWrapper" name="quizFormWrapper">
                ${this.generateQuestions(data.questions)}

                <div class="field">
                    <div class="control">
                        <button type="submit" class="button is-primary">Submit Quiz</button>
                    </div>
                </div>
            </form>
        `);
    }

    generateQuestions(questions) {
        let questionsMarkup = '';

        questions.forEach(question => {
            const queId = `que${question.id}`;
            questionsMarkup += `<div class="field">
                                <label class="label">${question.question}</label>
                                <div class="control">
                                        ${this.generateOptions(question.options, queId)}
                                </div>
                            </div>`;
        });

        return questionsMarkup;
    }

    generateOptions(options, queId) {
        let optMarkup='';

        options.forEach(opt => {
             optMarkup += `<label class="radio">
                 <input type="radio" value="${opt}" id="${queId}" name="${queId}"> ${opt}
             </label> <br />`;
        });

        return optMarkup;
    }

    addEventListeners() {
        let formEl = document.querySelector('#quizFormWrapper');
        formEl.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(formEl);

            this.generateScore(formData);
        });
    }

    generateScore(userAnswers) {
        let correctAnswers = 0;
        let percentage;

        for (let element of userAnswers.entries()) {
            this.quizData.questions.forEach(que => {
                if(element[0].includes(que.id)) {
                    if(que.answer == element[1]) {
                        correctAnswers += 1;
                    }
                }
            })
        }

        percentage = 100 * correctAnswers / this.quizData.questions.length;

        console.log(`you got ${correctAnswers} answers and percentage is: ${percentage}`);
    }
}