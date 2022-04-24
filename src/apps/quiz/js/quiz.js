import '../scss/quiz.scss';
import data from '../data/data.json';

import Quiz from '../../../components/quiz/quiz';

class QuizApp {
    constructor() {
        this.queEl = document.querySelector('#quiz');

        this.initialize();
    }

    initialize() {
        this.quiz = new Quiz({
            el: this.queEl,
            data: data,
        });
    }
}

new QuizApp();
