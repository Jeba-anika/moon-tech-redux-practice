import actionTypes from "../actionTypes/actionTypes";

const initialState = {
    cart: [],
}

const productReducer = (state = initialState, action) => {
    const selectedProduct = state.cart.find(product => product._id === action.payload._id)
    
    
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            if(selectedProduct){
                const newCart = state.cart.filter(
                    product => product._id !== selectedProduct._id
                )
                selectedProduct.quantity = selectedProduct.quantity+ 1;
                return {...state,
                cart: [...newCart,selectedProduct ]};
            }
            return {
                ...state,
                cart:[...state.cart, {...action.payload,quantity: 1}],
            };
        case actionTypes.REMOVE_FROM_CART:
            if(selectedProduct.quantity > 1){
                const newCart = state.cart.filter(
                    product => product._id !== selectedProduct._id
                )
                selectedProduct.quantity = selectedProduct.quantity - 1;
                return {...state,
                cart: [...newCart,selectedProduct ]};
            }
            return {
                ...state,
                cart: state.cart.filter(product => product.id !== action.payload.id)
            };
        default: return state
    }
}

export default productReducer;