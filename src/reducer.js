export const initialState = {
  basket: [],
  user: null
};

export const getBasketTotal = basket =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      };
    case 'ADD_TO_BASKET':
      // logic for adding items to basket/cart
      return {
        ...state,
        basket: [...state.basket, action.item]
      };
    case 'REMOVE_FROM_BASKET':
      // logic for removing items from basket/cart

      //clone the basket
      let newBasket = [...state.basket];

      //check if product exists
      const index = state.basket.findIndex(
        basketItem => basketItem.id === action.id
      );

      //item exists then remove, else give a warning log
      index >= 0
        ? newBasket.splice(index, 1)
        : console.warn(
            `cant remove product (id: ${action.id}) as it doesnt exist!`
          );
      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;
