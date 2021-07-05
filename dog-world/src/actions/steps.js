//if we return an object(like we did before), it would be synchronous flow and we can not do anything outside(as we need data from outside)
//1- when we fetch data from API, it is asynchronous action, so, the solution to this is,instead of returning an object we will return a function from . 
//2-BUT reducer will throw an error if the action that ever dispatched is not an object OR does not have "TYPE" property
//4 Thunk solve this problem, when the action is dispatched it goes to middleaware before reaching the reducer. and thunk will do the below and invoke the function and action will reach the reducer(otherwise in asynchronos actioncreator, action will never reach the reducer)

// const dogByBreed = () =>{
//     return (dispatch) =>{
//         dispatch({type: "DOG_BREED"})
//         //make the API call
//     }    
// }
//---------------------
// const thunk =(action)=>(next) =>{
//     if (typeof action ==="function"){
//         action();  // we actually invoked the function dogBreed
//     }else if (typeof action ==='object'){
//         next(action)
//     }
// }

//when the thunck calls the dogBreed function, it is going to pass store.dispatch

