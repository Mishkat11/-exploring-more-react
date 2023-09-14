// import React from 'react';
// import PropTypes from 'prop-types';

// import { data } from "autoprefixer";
import Swal from 'sweetalert2';
import Cart from '../Cart/Cart';
import Main from '../main/main';
import './card.css'
import { useEffect, useState } from "react";

const Card = ()=> {
    const [AllActors,SetAllActors]=useState([])
    const[cart,setCart] =useState([])
    const [cost , setCost]=useState(0)
    const [remaining, setRemaining]= useState(0)


    
const handleClick=actor=>{
   const isExist = cart.find(item =>item.id === actor.id)
   let count = actor.salary
   if(isExist){
    return Swal.fire({
        icon: 'error',
      
        text: 'You have already Chosen',
       
      })
   }else{
    
    cart.forEach(item=> {
        count += item.salary
    })
    const remainingSalary = 30000 - count
if(count>30000){
    return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You are over Budget!',
      
      })
}

    setCost(count)
    setRemaining(remainingSalary)
    // console.log(cost,remaining);
   setCart([...cart,actor])
   }
   
}


    useEffect(()=>{
 fetch('./data.json')
 .then(res=>res.json())
 .then(data=>SetAllActors(data))
    },[])
   
    return (<>
       <div className='flex mx-auto'>
       <div className='w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
           {
         AllActors &&   AllActors.map((actors,idx)=><Main key={idx} actor={actors} handleClick={handleClick}></Main>)
           }
        </div>
        <div className='w-1/3'>
           <Cart cart={cart}  cost={cost} remaining={remaining}></Cart>
        </div>
       </div>
        </>
    );
};

Card.propTypes = {
    
};

export default Card;