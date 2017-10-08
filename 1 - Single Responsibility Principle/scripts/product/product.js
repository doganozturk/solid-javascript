/**
 * Product
 *
 * @class Product
 */
class Product {
    /**
     * Creates an instance of Product.
     *
     * @param {Number} id
     * @param {String} description
     * @memberof Product
     */
    constructor(id, description) {
        this.id = id;
        this.description = description;
    }

    /**
     * Get Id
     *
     * @method
     * @returns {Number} id
     * @memberof Product
     */
    getId() {
        return this.id;
    }

    /**
     * Get Description
     *
     * @method
     * @returns {String} desc.
     * @memberof Product
     */
    getDescription() {
        return this.description;
    }
}
