import axios from 'axios';

export const FETCHING_START = "FETCHING_START";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAILURE = "FETCHING_FAILURE";


export const dogByBreed = () =>{
    return dispatch =>{
        dispatch({type: "FETCHING_START"})    
        axios.get(`https://dog.ceo/api/breeds/image/random`)
        // axios.get(`https://dog.ceo/api/breed/hound/images`)
        .then(res =>{
            console.log("I am the response from axios call", res)
          dispatch({type: "FETCHING_SUCCESS", payload:res.data.message })  
        })
        .catch(err =>{
            console.log("I am the error", err)
            dispatch({type: "FETCHING_FAILURE", payload: err })
        })  
            
        
    }      
}




// // invoking our function via thunk to dispatch the action. THIS IS HAPPENING UNDER THE HOOD
// const thunk =(action)=>(next) => store =>{
//     if (typeof action ==="function"){
//         action(store.dispatch);
//     }else if (typeof action ==='object'){
//         next(action)
//     }
// }


