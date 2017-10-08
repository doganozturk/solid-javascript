/**
 * Event
 *
 * @class Event
 */
class Event {
    /**
     * Creates an instance of Event.
     *
     * @param {String} name
     * @memberof Event
     */
    constructor(name) {
        this._handlers = [];
        this.name = name;
    }

    /**
     * Add event handler
     *
     * @method
     * @param {Function} handler
     * @memberof Event
     */
    addHandler(handler) {
        this._handlers.push(handler);
    }

    /**
     * Remove event handler
     *
     * @method
     * @param {Function} handler
     * @memberof Event
     */
    removeHandler(handler) {
        this.handlers.forEach((item, index) => {
            if (item === handler) this._handlers.splice(index, 1);
        });
    }

    /**
     * Fire event
     *
     * @method
     * @param {Object} eventArgs
     * @memberof Event
     */
    fire(eventArgs) {
        this._handlers.forEach(h => {
            h(eventArgs);
        });
    }
}
