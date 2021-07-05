import React from 'react';
import DogCard from './DogCard';
import {connect} from 'react-redux';
import {dogByBreed} from '../actions';
import Loader from 'react-loader-spinner';

const DogCardList = (props) => {


    return(
        <div>
             
            {<button onClick ={props.dogByBreed}>Click here!</button>}

            {/* {!props.dogBreed && <button onClick ={props.dogByBreed}>Click here!</button>} */}
            
          
             {props.error && !props.dogBreed && <h3>Sorry, something went wrong!</h3>}
            {!props.dogBreed && !props.isLoading && !props.error && (<h3>Meet the gentle beast!!</h3>)}
            
            {props.isLoading && ( 
                 
                 <Loader
                 type="Puff"
                 color="#00BFFF"
                 height={100}
                 width={100}
                 timeout={3000} //3 secs
        
              />
            )}
            <div className ="newDogCard">
            {!props.isLoading && props.dogBreed && (<img src = {props.dogBreed}/>)}</div>

            {/* <div className ="dogList">
            {!props.isLoading && props.dogBreed && (props.dogBreed.map((item,id)=>(
                <DogCard  key = {item.id} item ={item} />
            ))) }          
            </div> */}

        </div>
    )
}

 // write mapStateToProps function

 const mapStateToProps = (state) =>{
    return{
      isLoading:state.isLoading,
      dogBreed: state.dogBreed,
      status: state.status,
      error: state.error
    }
  }
  //wrap the App in connect and mapover mapStateToProps
export default connect(mapStateToProps,{dogByBreed})(DogCardList);

