/**
 * Radio Question Creator
 *
 * @class RadioQuestionCreator
 * @extends {QuestionCreator}
 */
class RadioQuestionCreator extends QuestionCreator {
    /**
     * Creates an instance of RadioQuestionCreator.
     *
     * @param {Object} opts
     * @memberof RadioQuestionCreator
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
     * @returns
     * @memberof RadioQuestionCreator
     */
    [renderInput]() {
        const $radioWrapper = document.createElement('div');

        this.opts.choices.forEach((choice, index) => {
            const id = `input_${index}`;

            const $input = document.createElement('input');
            $input.type = 'radio';
            $input.id = id;
            $input.name = 'gender';

            const $label = document.createElement('label');
            $label.innerText = choice;
            $label.setAttribute('for', id);

            $radioWrapper.appendChild($input);
            $radioWrapper.appendChild($label);
        });

        return $radioWrapper;
    }
}
