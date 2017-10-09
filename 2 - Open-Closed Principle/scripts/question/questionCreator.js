/**
 * Deps
 * Symbols for private
 * method declaration
 *
 */
const renderInput = Symbol();

/**
 * Question Creator
 *
 * @class QuestionCreator
 */
class QuestionCreator {
    /**
     * Creates an instance of QuestionCreator.
     *
     * @param {Object} opts
     * @memberof QuestionCreator
     */
    constructor(opts) {
        this.opts = opts || {};
    }

    /**
     * Render Input
     *
     * @method
     * @private
     * @static
     * @memberof QuestionCreator
     */
    static [renderInput]() {
        throw Error('NOT_IMPLEMENTED');
    }

    /**
     * Render
     *
     * @method
     * @public
     * @returns {Object} HTMLElement
     * @memberof QuestionCreator
     */
    render() {
        const $questionWrapper = document.createElement('div');
        $questionWrapper.className = 'question';

        const $questionLabel = document.createElement('div');
        $questionLabel.className = 'question-label';
        $questionLabel.appendChild(document.createTextNode(this.opts.label));

        const $answer = this[renderInput]();

        $questionWrapper.appendChild($questionLabel);
        $questionWrapper.appendChild($answer);

        return $questionWrapper;
    }
}
