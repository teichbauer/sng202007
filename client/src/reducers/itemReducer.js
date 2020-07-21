import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from '../actions/types';

const initialState = {
    items: [],
    loading: false
}

/**
 * anonymouse function export. The importer as name whatever he like.
 * ------
 * in js, d0 = { items:[11,22,33]}
 * 1. d1 = {...d0}  //d1 == { items:[11,22,33]}, and
 * 2. the last same-key overwrite the prev key-value pair:
 *    d3 = { it2: ['hello'], it2: [22,33,44]} // d3=={ it2:[22,33,44]}
 * So, using 1. and 2.:
 * d4 = {...d0, items:[100,400]}  d4 == { items[100,400]}
 * This what is happening in DELETE_ITEM and ADD_ITEM's return value
 * --------------------
 * Reducer function returns a state, or modified new state
 */
export default function(state=initialState, action){
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading: false
            };
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            };
        case ADD_ITEM:
            return {
                ...state,
                items: [action.payload, ...state.items]
            };
        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            }

        default:
            return state;
    }
}