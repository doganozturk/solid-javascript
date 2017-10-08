/**
 * Deps
 * Symbols for private
 * method declaration
 *
 */
const itemAdded = Symbol();
const onCartItemClicked = Symbol();

/**
 * Cart View
 *
 * @class CartView
 */
class CartView {
    /**
     * Creates an instance of CartView.
     *
     * @memberof CartView
     */
    constructor() {
        this.$cart = document.getElementById('cart');

        eventAggregator.subscribe('itemAdded', eventArgs =>
            this[itemAdded](eventArgs),
        );
    }

    /**
     * Item added handler
     *
     * @method
     * @private
     * @param {Object} eventArgs
     * @memberof CartView
     */
    [itemAdded](eventArgs) {
        const $item = document.createElement('li');

        $item.innerHTML = eventArgs.getDescription();
        $item.setAttribute('id', eventArgs.getId());
        $item.addEventListener('click', e => this[onCartItemClicked](e));

        this.$cart.appendChild($item);
    }

    /**
     * On cart item clicked handler
     *
     * @method
     * @private
     * @param {Object} e
     * @memberof CartView
     */
    [onCartItemClicked](e) {
        this.$cart.removeChild(e.currentTarget);

        eventAggregator.publish('itemRemoved', {
            id: e.currentTarget.getAttribute('id'),
        });
    }
}
