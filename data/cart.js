export let cart = [
  {
    productId: "e454des5-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2
  },
  {
    productId: "c45ds34s-zx5d44-4d34-rc55-s321s3aas",
    quantity: 1,
  }
];


export function addToCart(productId) {
  let matchingItem;

  // quantitySelector
  const quantitySelector = document.querySelector(
    `.js-quantity-selector-${productId}`
  );
  let quantityVar = Number(quantitySelector.value)
  // quantitySelector

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem
    }
  });

  if (matchingItem) {
    matchingItem.quantity += quantityVar;
  } else {
    cart.push({
      productId: productId,
      quantity: quantityVar
    });
  }
}

export function removeFromCart(productId) {
  const newCart = [];
  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem)
    }
  });
  cart = newCart
}