import CartActionTypes from './cart.types';
import { AddItemToCartNew} from '../cart/cart.utils';

const INTITALSTATE = {
    hidden : true ,
    cartItems : []
}

const CartReducer = (state = INTITALSTATE,action) => {
    switch (action.type) {
        case CartActionTypes.TOOGLE_CART_HIDDEN :
            return{
                ...state,
                hidden : !state.hidden
            }
            case CartActionTypes.ADD_CART_ITEMS :
                return{
                    ...state,
                    cartItems : AddItemToCartNew(state.cartItems , action.payload)
                }
            default :
            return state
    }
}
export default CartReducer;