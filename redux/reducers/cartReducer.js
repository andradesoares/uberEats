let defaultState = {
  selectedItems: {
    items: [],
    restaurantName: '',
    checkboxValue: false,
  },
};

let CartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const newState = {
        ...state,
        selectedItems: {
          items: [...state.selectedItems.items, action.payload],
          restaurantName: action.payload.restaurantName,
          checkboxValue: action.payload.checkboxValue,
        },
      };
      return newState;
    default:
      return state;
  }
};

export default CartReducer;
