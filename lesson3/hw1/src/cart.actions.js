export const ADD_PRODUCT = 'PRODUCT/ADD_PRODUCT ';
export const REMOVE_PRODUCT = 'PRODUCT/DELETE_PRODUCT';


export const addProduct = productData => {
    return {
        type: ADD_PRODUCT,
        payload: {
            productData
        }
    }
};


export const removeProduct = productId => {
    return {
        type: REMOVE_PRODUCT,
        payload: {
            productId
        }
    }
};
