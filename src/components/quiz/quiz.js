import './quiz.scss';

export default class Quiz {
    constructor(options) {
        this.el = options.el;
        this.quizData = options.data;

        global.util.dom.injectMarkup(this.el, this.formatMarkup(this.quizData));
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
}
