import axios from 'axios';

export const dogByBreed = () =>{
    return dispatch =>{
        dispatch({type: "FETCHING_START"})    
        axios.get(`https://dog.ceo/api/breed/hound/images`)
        .then(res =>{
            console.log("I am the response from axios call", res)
          dispatch({type: "FETCHING_SUCCESS", payload:res.data.message })  
        })
        .catch(err =>{
            console.log("I am the error", err)
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


