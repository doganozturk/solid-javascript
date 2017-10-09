/**
 * Text Question Creator
 *
 * @class TextQuestionCreator
 * @extends {QuestionCreator}
 */
class TextQuestionCreator extends QuestionCreator {
    /**
     * Creates an instance of TextQuestionCreator.
     *
     * @param {Object} opts
     * @memberof TextQuestionCreator
     */
    constructor(opts) {
        super(opts);
    }

    /**
     * Render Input
     *
     * @method
     * @override
     * @private
     * @returns {Object} HTMLElement
     * @memberof TextQuestionCreator
     */
    [renderInput]() {
        const $input = document.createElement('input');
        $input.type = 'text';

        return $input;
    }
}
