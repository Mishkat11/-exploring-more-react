
import PropTypes from 'prop-types';

const Main = ({actor,handleClick})=> {
  const {image, name, role, salary}= actor
    return (
       
          <div 
          className="card card-compact bg-base-100 shadow-xl">
  <figure><img className='w-20 rounded-full'  src={image} alt="Shoes" /></figure>
  <div 
  className="card-body">
    <h2 
    className="card-title justify-center">{name}</h2>
    <p className='text-center'>Lorem, ipsum dolor sit amet consectetur  </p>
    <div className='flex justify-evenly text-center'>
        <p>Salary: {salary} $</p>
        <p>{role}</p>
    </div>
    <div 
    className="card-actions justify-center">
      <button 
      className="btn btn-primary " onClick={ ()=>handleClick(actor)}>Buy Now</button>
    </div>
  </div>
</div>
       
    );
};

Main.propTypes = {
    handleClick: PropTypes.func,
    actor: PropTypes.object

};

export default Main;