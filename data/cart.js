export const cart = []
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