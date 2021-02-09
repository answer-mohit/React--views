import React, { useState } from 'react'
import './reviews.css';
import reviews from './data';
import {FaChevronRight,FaChevronLeft} from 'react-icons/fa';
function Reviews() {
    const[index,setIndex]=useState(3);
    const {id,name,image,job,text}=reviews[index];
    const changeNumber=(number)=>{
if(number<0){
    return reviews.length-1;
}
if(number>reviews.length-1){
    return 0;
}
return number;
    }
const nextPerson=()=>{
    setIndex((index)=>{
const newIndex=index+1;
return changeNumber(newIndex);
    });
}
const prePerson=()=>{
    setIndex((index)=>{
const newIndex=index-1;
return changeNumber(newIndex);

    });
}
const surprisebtn=()=>{
    let RanduNum=Math.floor(Math.random()*reviews.length-1);
    return setIndex(changeNumber(RanduNum));
}
    return (
        <div className="container">
        <div className="row py-3">
            <div className="col-8 offset-2 bg-light p-3 review">
<div className="text-center p-5 img-wrap">
    <img src={image} alt={name} className="image"/>
</div>
<div className="text-center">
    <h3 className=" text-danger text-capitalize">
        {name}
    </h3>
    <h5 className="text-capitalize">{job}</h5>

</div>
<div className="p-2">

<p className="text-secondary font-italic">
    {text}
</p>
</div>
<div className="text-center">
<button className="text-primary btn" onClick={prePerson}>
    <FaChevronLeft/>
</button>
<button className="text-primary btn" onClick={nextPerson}>
    <FaChevronRight/>
</button>
</div>
<div className="text-center m-3">
<button className="btn btn-primary" onClick={surprisebtn}>Surprise me</button>

</div>
            </div>
        </div>
            
        </div>
    )
}

export default Reviews
