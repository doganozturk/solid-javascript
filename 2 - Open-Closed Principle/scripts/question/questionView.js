/**
 * Deps
 * Symbols for private
 * method declaration
 *
 */
const mapQuestions = Symbol();

/**
 * Question View
 *
 * @class QuestionView
 */
class QuestionView {
    /**
     * Creates an instance of QuestionView.
     *
     * @param {Object} HTMLElement
     * @param {Array} questions
     * @memberof QuestionView
     */
    constructor(target, questions) {
        this.questions = questions || [];
        this.target = target;
    }

    /**
     * Render
     *
     * @public
     * @memberof QuestionView
     */
    render() {
        this[mapQuestions]().forEach(question => {
            this.target.appendChild(question.render());
        });
    }

    /**
     * Map questions according
     * to their respective renderAs option
     *
     * @method
     * @private
     * @returns {Array} mapped questions
     * @memberof QuestionView
     */
    [mapQuestions]() {
        return this.questions.map(question => {
            switch (question.renderAs) {
                case 'select':
                    return new SelectQuestionCreator(question);
                    break;
                case 'text':
                    return new TextQuestionCreator(question);
                    break;
                case 'radio':
                    return new RadioQuestionCreator(question);
                    break;
                default:
                    break;
            }
        });
    }
}
