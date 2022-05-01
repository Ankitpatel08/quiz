import '../scss/explore-quiz.scss';
import data from '../data/data.json';
import QuizCards from '../../../components/quiz-cards/quiz-cards';

class ExploreQuiz {
    constructor() {
        this.exploreQuizEl = document.querySelector('#exploreQuiz');

        this.isLoggedIn = global.util.func.isLoggedIn();

        if (!this.isLoggedIn) {
            window.location.href = '/login';
        }

        this.initialize();
        this.addEventListeners();
    }

    initialize() {
        this.quizCards = new QuizCards({
            el: this.exploreQuizEl,
            data: data.cards
        });
    }

    addEventListeners() {
        let cards = this.exploreQuizEl.querySelectorAll('.card');

        cards.forEach(card => {
            card.addEventListener('click', (evt) => {
                console.log('executed card click', evt.currentTarget);

                global.util.func.localStorageSave('quiz', {
                    code: evt.currentTarget.dataset.code
                });

                window.location.href = '/quiz';
            });
        });
    }
}

new ExploreQuiz();
