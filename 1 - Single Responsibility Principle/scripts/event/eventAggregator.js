/**
 * Deps
 * Symbols for private
 * method declaration
 *
 */
const getEvent = Symbol();

/**
 * Event Aggregator
 *
 * @class EventAggregator
 */
class EventAggregator {
    /**
     * Creates an instance of EventAggregator.
     *
     * @memberof EventAggregator
     */
    constructor() {
        this.events = [];
    }

    /**
     * Get event
     *
     * @method
     * @private
     * @param {String} eventName
     * @returns {Object} event
     * @memberof EventAggregator
     */
    [getEvent](eventName) {
        return this.events.filter(event => event.name === eventName)[0];
    }

    /**
     * Publish event
     *
     * @method
     * @param {String} eventName
     * @param {Object} eventArgs
     * @memberof EventAggregator
     */
    publish(eventName, eventArgs) {
        let event = this[getEvent](eventName);

        if (!event) {
            event = new Event(eventName);
            this.events.push(event);
        }
        event.fire(eventArgs);
    }

    /**
     * Subscribe to an event
     *
     * @method
     * @param {String} eventName
     * @param {Function} handler
     * @memberof EventAggregator
     */
    subscribe(eventName, handler) {
        let event = this[getEvent](eventName);

        if (!event) {
            event = new Event(eventName);
            this.events.push(event);
        }
        event.addHandler(handler);
    }
}
