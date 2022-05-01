import '../scss/quiz.scss';
import data from '../data/data.json';

import Quiz from '../../../components/quiz/quiz';

class QuizApp {
    constructor() {
        this.queEl = document.querySelector('#quiz');
        this.isLoggedIn = global.util.func.isLoggedIn();

        if (!this.isLoggedIn) {
            window.location.href = '/login';
        }

        (async () => {
            const quiz = global.util.func.localStorageGet('quiz');
            const quizCode = quiz && quiz.code;

            this.quizData = await global.util.callService('getQuizData', {
                code: quizCode,
            });

            this.initialize(this.quizData);
            this.addEventListeners();
        })();
    }

    initialize(quizData) {
        this.quiz = new Quiz({
            el: this.queEl,
            data: quizData,
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
            this.quizData.forEach(que => {
                if(element[0].includes(que.id)) {
                    if(que.answer == element[1]) {
                        correctAnswers += 1;
                    }
                }
            })
        }

        percentage = 100 * correctAnswers / this.quizData.length;

        console.log(`you got ${correctAnswers} answers and percentage is: ${percentage}`);
    }
}

new QuizApp();
