function getProducts() {
  const storagedProducts = localStorage.getItem(
    '@Upstack-Code:products',
  );

  if (storagedProducts) {
    return JSON.parse(storagedProducts);
  }

  return [];
}

const INITIAL_STATE = {
  products: getProducts(),
  modalProduct: false,
  productId: null,
}

export default function product(state = INITIAL_STATE, action) {
  if (action.type === "TOGGLE_MODAL") {
    return {
      ...state,
      modalProduct: !state.modalProduct,
      productId: action.productId
    }
  }

  if (action.type === "SAVE_PRODUCT") {
    return {
      ...state,
      products: getProducts()
    }
  }

  return state;
}
