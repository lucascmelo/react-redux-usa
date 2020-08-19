export function toggleModal(productId) {
  return {
    type: 'TOGGLE_MODAL',
    productId
  }
}

export function saveProduct() {
  return {
    type: 'SAVE_PRODUCT'
  }
}
