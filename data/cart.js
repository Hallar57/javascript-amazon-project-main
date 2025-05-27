export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
  cart = [{
    prodId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2,
  }, {
    prodId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1
  }];
}

function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addtocaart(productId){
  let matchingitem;

  cart.forEach((item)=>{
    if(productId===item.prodId){
      matchingitem = item;
    }
  });

  if(matchingitem){
    matchingitem.quantity +=1;
  } else {
    cart.push({
      productId: productId,
      quantity:1
    });
  }
  saveToStorage();
}

export function removefromcart(prodId){
  let newcart = [];

  cart.forEach((item)=>{
    if(item.prodId !== prodId){
      newcart.push(item);
    }
  });

  cart = newcart;
  saveToStorage();
}