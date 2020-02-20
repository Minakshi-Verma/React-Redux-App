import React from 'react';
import DogCard from './DogCard';
import {connect} from 'react-redux';
import {dogByBreed} from '../actions';
import Loader from 'react-loader-spinner';

const DogCardList = (props) => {


    return(
        <div>
            <button onClick ={props.dogByBreed}>check it out!</button>
            {!props.dogBreed && !props.isLoading && (<h3>Explore the Dog World</h3>)}
            
            {props.isLoading && ( 
                 
                 <Loader
                 type="Puff"
                 color="#00BFFF"
                 height={100}
                 width={100}
                 timeout={3000} //3 secs
        
              />
            )}
            <div className ="dogList">
            {!props.isLoading && props.dogBreed && (props.dogBreed.map((item,id)=>(
                <DogCard  key = {item.id} item ={item} />
            ))) }          
            </div>
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

