/**
 * Init questions
 *
 */
const questions = [
    {
        label: 'Have you used tobacco products within the last 30 days?',
        choices: ['Yes', 'No'],
        renderAs: 'select',
    },
    {
        label: 'What medications are you currently using?',
        renderAs: 'text',
    },
    {
        label: 'Who is your best friend?',
        renderAs: 'text',
    },
    {
        label: 'Which is the best city in Turkey',
        choices: ['İstanbul', 'Ankara', 'Bursa', 'Eskişehir'],
        renderAs: 'select',
    },
    {
        label: 'Which is your gender?',
        choices: ['Male', 'Female'],
        renderAs: 'radio',
    },
];

/**
 * Declare DOM node
 * for questions
 *
 */
const $questions = document.getElementById('questions');

/**
 * Create new View
 *
 */
const questionView = new QuestionView($questions, questions);

/**
 * Render questions
 *
 */
questionView.render();
