import React from 'react';


const DogCard = (props) => {
    console.log("I am the props from dog card", props)

    return(

        <div className ="dogCard">
            <img src ={props.item}/>

        </div>
    )
}

export default DogCard;