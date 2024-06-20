import React, { useEffect, useState } from 'react';
// import data_product from '../Assets/data';
import Item from '../Item/Item';

const Popular = () => {

const [popularProducts,setPopularProducts]= useState([]);

useEffect(()=>{
  fetch('http://localhost:4000/popularinwomen')
  .then((response)=>response.json())
  .then((data)=>setPopularProducts(data));
},[])

  return (
    <div className='popular bg-gray-100 py-8 px-4 sm:px-6 lg:px-8'>
      <h1 className='text-3xl sm:text-4xl font-bold text-center mb-6'>POPULAR IN WOMEN</h1>
      <hr className='border-gray-300 mb-6' />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {popularProducts.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
