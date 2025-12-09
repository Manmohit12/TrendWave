import React from 'react'
import loadingGif from './loading.gif';

 const Spinner=()=> {
    return (
      <div className='text-center '>
        <img className=' text-center'  src={loadingGif} alt='error' />
      </div>
    )
  
}
export default Spinner;