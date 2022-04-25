import '../scss/quiz.scss';
import data from '../data/data.json';

import Quiz from '../../../components/quiz/quiz';

class QuizApp {
    constructor() {
        this.queEl = document.querySelector('#quiz');

        this.initialize();
        this.addEventListeners();
    }

    initialize() {
        this.quiz = new Quiz({
            el: this.queEl,
            data: data,
        });
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
            data.questions.forEach(que => {
                if(element[0].includes(que.id)) {
                    if(que.answer == element[1]) {
                        correctAnswers += 1;
                    }
                }
            })
        }

        percentage = 100 * correctAnswers / data.questions.length;

        console.log(`you got ${correctAnswers} answers and percentage is: ${percentage}`);
    }
}

new QuizApp();
