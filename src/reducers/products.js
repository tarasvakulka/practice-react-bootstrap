import { RECEIVE_PRODUCTS } from '../constants/ActionTypes'

export default function products(state = [], action) {
    if (action.type === RECEIVE_PRODUCTS) {
        return action.payload;
    }
    return state;
}