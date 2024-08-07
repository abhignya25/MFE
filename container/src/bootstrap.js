import { mount as ProductsShow } from 'products/ProductsIndex';
import { mount as CartShow } from 'cart/CartShow';

console.log('Container');

ProductsShow(document.querySelector('#my-products'));
CartShow(document.querySelector('#my-cart'));