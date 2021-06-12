export const initialState = {
  basket: []
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case 'ADD_TO_BASKET':
      // logic for adding items to basket/cart
      return {
        ...state,
        basket: [...state.basket, action.item]
      };
    case 'REMOVE_FROM_BASKET':
      // logic for removing items from basket/cart
      return { state };
    default:
      return state;
  }
}

export default reducer;
