/**
 * Define products
 *
 */
const products = [
    new Product(1, 'Star Wars Lego Ship'),
    new Product(2, 'Barbie Doll'),
    new Product(3, 'Remote Control Airplane'),
];

/**
 * Set eventAggregator
 *
 */
window.eventAggregator = new EventAggregator();

/**
 * Create new cart instance
 *
 */
const cart = new Cart();

/**
 * Initialize views & controllers
 *
 */
const productView = new ProductView(products);
const cartController = new CartController(cart);
const cartView = new CartView();
