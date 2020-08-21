import { ADD_PRODUCT, REMOVE_PRODUCT } from './cart.actions.js'

const initialState = {
    productList: []
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT: {
            return {
                ...state,
                productList: state.productList.concat(action.payload.productData)
            }
        };
        case REMOVE_PRODUCT: {
            const newList = state.productList.filter(
                user => user.id !== action.payload.productId
            )
            return {
                ...state,
                productList: newList
            };

        }
        default:
            return state
    }
};

export default productReducer;