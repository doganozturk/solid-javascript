/**
 * Select Question Creator
 *
 * @class SelectQuestionCreator
 * @extends {QuestionCreator}
 */
class SelectQuestionCreator extends QuestionCreator {
    /**
     * Creates an instance of SelectQuestionCreator.
     *
     * @param {Object} opts
     * @memberof SelectQuestionCreator
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
     * @memberof SelectQuestionCreator
     */
    [renderInput]() {
        const $input = document.createElement('select');

        this.opts.choices.forEach(choice => {
            const $option = document.createElement('option');
            $option.text = choice;
            $option.value = choice;

            $input.appendChild($option);
        });

        return $input;
    }
}
