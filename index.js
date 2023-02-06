const redux = require('redux')
const createStore = redux.createStore;
const combinedReducers = redux.combineReducers;

//type of action
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';


//      //define action = action is an object that has a type property
//      {
//          type : BUY_CAKE,
//          info : 'First Redux Action'
//      }


//action creater : action creater creates action. it is a function
// which returns an action
function buyCake () {
    return {
            type : BUY_CAKE,
            info : 'First Redux Action'
        }
}
function buyIceCream () {
    return {
            type : BUY_ICECREAM
        }
}

//Reducer : it spcify how the app's state changes in response to actions sent to the store
// its a function that takes state and action as argument and return the next state of app

//    (previousState, action) => newState



// initial state
// const initialState = {
//     numOfCakes : 10,
//     numOfIceCreams : 20
// }

const initialCakeState = {
    numOfCakes: 10
}
const initiaIceCreamState = {
    numOfIceCreams: 20
}



// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case BUY_CAKE : return {
//             ...state,
//             numOfCakes : state.numOfCakes - 1
//         }
//         case BUY_ICECREAM : return {
//             ...state,
//             numOfIceCreams : state.numOfIceCreams - 1
//         }
//         default : return state
//     }
// }


const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE : return {
            ...state,
            numOfCakes : state.numOfCakes - 1
        }
        default : return state
    }
}
const iceCreamReducer = (state = initiaIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM : return {
            ...state,
            numOfIceCreams : state.numOfIceCreams - 1
        }
        default : return state
    }
}

// one store for entire application

//responsibility of redux store
//1 holds application state
//2. allows access to state via getState()
//3. Allows state to be updated via dispatch(action)
//4. Registers listeners via subscribe(listener)
//5. Handles unregistering of listeners via the function returned by subscribe(listener)

const rootReducer = combinedReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
// const store = createStore(reducer);
const store = createStore(rootReducer);

console.log('Initial State', store.getState())
const unsubscribe = store.subscribe(()=>console.log('Updated State', store.getState()))
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
