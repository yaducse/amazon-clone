export const initialState = {
  basket: [
    {
      id: '123128',
      title:
        'Mi Notebook Horizon Edition 14 Intel Core i5-10210U 10th Gen 14-inch (35.56 cms) Thin and Light Laptop(8GB/512GB SSD/Windows 10/Nvidia MX350 2GB Graphics/Grey/1.35Kg), XMA1904-AR+Webcam',
      price: 54999.0,
      rating: 5,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/712rw0zcH8L._SL1500_.jpg'
    },
    {
      id: '123128',
      title:
        'Mi Notebook Horizon Edition 14 Intel Core i5-10210U 10th Gen 14-inch (35.56 cms) Thin and Light Laptop(8GB/512GB SSD/Windows 10/Nvidia MX350 2GB Graphics/Grey/1.35Kg), XMA1904-AR+Webcam',
      price: 54999.0,
      rating: 5,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/712rw0zcH8L._SL1500_.jpg'
    }
  ],
  user: null
};

export const getBasketTotal = basket =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
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
