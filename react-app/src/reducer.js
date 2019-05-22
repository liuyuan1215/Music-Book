import { combineReducers } from 'redux';
let num = (state=0,action)=>{
    console.log(state,action);
    switch (action.type){
        case 'ADD':
            return state+action.payload;
        case 'REDUCE':
            return state-1;
        default:
            return state
    }
}
export default combineReducers({
    num
});