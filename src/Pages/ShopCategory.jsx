import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner w-full h-48 object-cover mb-4' src={props.banner} alt="" />
      <div className="shopcategory-indexSort flex justify-between items-center mb-4 px-4">
        <p className='text-gray-700'>
          <span className='font-semibold'>Showing 1-12</span> out of the 36 products
        </p>
        <div className="shopcategory-sort flex items-center text-gray-700">
          Sort by <img src={dropdown_icon} alt="" className='w-4 h-4 ml-2 cursor-pointer' />
        </div>
      </div>
      <div className="shopcategory-products grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore mt-6 text-center">
        <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-200">Explore More</button>
      </div>
    </div>
  );
}

export default ShopCategory;
