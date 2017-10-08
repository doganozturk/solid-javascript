/**
 * Deps
 * Symbols for private
 * method declaration
 *
 */
const onProductSelected = Symbol();
const addProduct = Symbol();

/**
 * Product View
 *
 * @class ProductView
 */
class ProductView {
    /**
     * Creates an instance of ProductView.
     *
     * @param {Array} products
     * @memberof ProductView
     */
    constructor(products) {
        this.products = products;
        this.$products = document.getElementById('products');

        this.products.forEach(product => this[addProduct](product));
    }

    /**
     * Draw view
     *
     * @method
     * @private
     * @param {Object} product
     * @memberof ProductView
     */
    [addProduct](product) {
        const $item = document.createElement('li');

        $item.innerHTML = product.getDescription();
        $item.setAttribute('id', product.getId());
        $item.addEventListener('click', e => this[onProductSelected](e));

        this.$products.appendChild($item);
    }

    /**
     * On product selected handler
     *
     * @method
     * @private
     * @param {Object} e
     * @memberof ProductView
     */
    [onProductSelected](e) {
        const productId = e.currentTarget.getAttribute('id');
        const product =
            this.products &&
            this.products.filter(product => product.getId() == productId)[0];

        eventAggregator.publish('productSelected', {
            product,
        });
    }
}
