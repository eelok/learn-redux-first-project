//когда делаю redux это все нужно
// //STORE -> globalized state
// //action increment
// import {createStore} from "redux";
//
// const increment = () =>{
//     return {
//         type: 'INCREMENT'
//     }
// }
//
// const decrement = () =>{
//     return {
//         type: 'DECREMENT'
//     }
// }
// //reducer
// const counter = (state= 0, action) => {
//     switch (action.type){
//         case 'INCREMENT':
//             return state + 1;
//         case  'DECREMENT':
//             return state - 1;
//     }
// }
//
// let store = createStore(counter);
//
// //Display stor ein the console
// store.subscribe(() => console.log(store.getState()));
//
// //dispatch
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());
// store.dispatch(decrement());
