/**
 * Cart
 *
 * @class Cart
 */
class Cart {
    /**
     * Creates an instance of Cart.
     *
     * @memberof Cart
     */
    constructor() {
        this.items = [];
    }

    /**
     * Add Item
     *
     * @method
     * @param {Object} item
     * @memberof Cart
     */
    addItem(item) {
        this.items.push(item);
        eventAggregator.publish('itemAdded', item);
    }

    /**
     * Remove Item
     *
     * @method
     * @param {Number} id
     * @memberof Cart
     */
    removeItem(id) {
        this.items = this.items.filter(item => item.id != id);
    }
}
