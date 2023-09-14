
import PropTypes from 'prop-types';

const Cart = ({cart,cost, remaining}) => {
  console.log(cost,remaining);
  
    return (
      <div className=' text-center'>
        <h1 className=' text-2xl font-semibold'>This the Cart Adding section</h1>
        
        <p className='text-xl '>Actor Length: {cart.length}</p>

       <div className='flex justify-center gap-5 text-xl font-bold'>
       <p>Total Cost: {cost}</p>
<p>Total Remaining:{remaining}</p>
       </div>
        {
          cart.map((name,idx)=><li key={idx}>{name.name}</li>)
        }
      </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array,
    cost: PropTypes.number,
    remaining: PropTypes.number
};

export default Cart;