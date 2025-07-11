import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {renderCheckoutHeader} from './checkout/checkoutHeader.js';
import {loadProducts, loadProductsFetch} from '../data/products.js';
import {loadCart} from '../data/cart.js';
//import '../data/cart-class.js';
//import '../data/backend-practice.js';

async function loadPage(){
  try{
    await loadProductsFetch()

    await new Promise((resolve)=>{
      loadCart(()=>{
        resolve();
      });
    });
  } catch (error) {
    console.log('Unexpected error. Please try again later.');
  }


  renderOrderSummary();
  renderPaymentSummary();
  renderCheckoutHeader();

}
loadPage();

/*
Promise.all([

  loadProductsFetch(),
  new Promise((resolve)=>{
    loadCart(()=>{
      resolve();
    });
  })

]).then(()=>{
  renderOrderSummary();
  renderPaymentSummary();
  renderCheckoutHeader();
})


new Promise((resolve)=>{
  loadProducts(()=>{
    resolve();
  })

}).then(()=>{
  return new Promise((resolve)=>{
    loadCart(()=>{
      resolve();
    });
  })

}).then(()=>{
  renderOrderSummary();
  renderPaymentSummary();
  renderCheckoutHeader();
})


loadProducts(()=>{
  loadCart(()=>{
  renderOrderSummary();
  renderPaymentSummary();
  renderCheckoutHeader();
  })

});*/
