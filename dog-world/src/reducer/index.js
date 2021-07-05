import {FETCHING_START, FETCHING_SUCCESS, FETCHING_FAILURE} from '../actions'

const initialState = {
    isLoading: false,
    dogBreed:null,  //if  we keep it as empty array/ object, (!props.dogbreed) will always be truthy since it means there is dogbread no matter it is[] or{}
    // status: null,
    error: ''

}


export const reducer = ( state = initialState, action) =>{
    console.log("I am action from reducer", action)

    switch(action.type){
        //1st case here
        case FETCHING_START:
            return{
                ...state,
                isLoading: true                
            }
        case FETCHING_SUCCESS:
            return{
                ...state,
                isLoading:false,
                dogBreed: action.payload
            }

        case FETCHING_FAILURE:
            return{
                ...state,
                isLoading: true,
                error: action.payload
            }
        default:
            return state;    
    }
};