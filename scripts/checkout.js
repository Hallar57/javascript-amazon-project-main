import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {renderCheckoutHeader} from './checkout/checkoutHeader.js';
import {loadProducsts} from '../date/products.js';
//import '../data/cart-class.js';
//import '../data/backend-practice.js';

loadProducsts(()=>{
  renderOrderSummary();
  renderPaymentSummary();
  renderCheckoutHeader();
});
