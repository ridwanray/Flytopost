import {createStore} from 'redux';

const store = createStore((state = { count:0 }) => {
    return state;
});

console.log(store.getState());
//redux action to redux store
store.dispatch({

})