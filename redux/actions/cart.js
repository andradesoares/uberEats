export const selectItem = (item, restaurantName, checkboxValue) => async (dispatch) => {
  dispatch({
    type: 'ADD_TO_CART',
    payload: { ...item, restaurantName, checkboxValue },
  });
};
