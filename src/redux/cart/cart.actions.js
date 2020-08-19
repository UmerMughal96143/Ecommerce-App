import CartActionTypes from './cart.types';

export const toogleCartHidden = () => ({
    type: CartActionTypes.TOOGLE_CART_HIDDEN
    
})

export const addItemToCart = (item) => (
    {
        type : CartActionTypes.ADD_CART_ITEMS,
        payload : item
    }
)