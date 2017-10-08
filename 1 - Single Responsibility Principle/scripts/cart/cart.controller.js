/**
 * Deps
 * Symbols for private
 * method declaration
 *
 */
const productSelected = Symbol();
const itemRemoved = Symbol();

/**
 * Cart Controller
 *
 * @class CartController
 */
class CartController {
    /**
     * Creates an instance of CartController.
     *
     * @param {Object} cart
     * @memberof CartController
     */
    constructor(cart) {
        this.cart = cart;

        eventAggregator.subscribe('productSelected', eventArgs => {
            this[productSelected](eventArgs);
        });
        eventAggregator.subscribe('itemRemoved', eventArgs =>
            this[itemRemoved](eventArgs),
        );
    }

    /**
     * Product selected handler
     *
     * @method
     * @private
     * @param {Object} eventArgs
     * @memberof CartController
     */
    [productSelected](eventArgs) {
        if (this.cart.items.includes(eventArgs.product)) return;
        this.cart.addItem(eventArgs.product);
    }

    /**
     * Remove item from cart
     *
     * @method
     * @private
     * @param {Object} eventArgs
     * @memberof CartController
     */
    [itemRemoved](eventArgs) {
        this.cart.removeItem(eventArgs.id);
    }
}
