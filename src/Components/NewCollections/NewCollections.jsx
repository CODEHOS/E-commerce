import React, { useEffect, useState } from 'react';
// import new_collection from '../Assets/new_collections';
import Item from '../Item/Item';

const NewCollections = () => {
    const [new_collection, setNew_collection] =useState([]);

    useEffect(()=>{
        fetch('http://localhost:4000/newcollections')
        .then((response)=>response.json())
        .then((data)=>setNew_collection(data));
    },[])
    return (
        <div className='new-collections flex flex-col items-center gap-10 h-90vh'>
        <h1 className="text-gray-800 text-4xl font-semibold">New Collections</h1>
        <hr className="w-52 h-2 bg-black rounded-full" />
        <div className="collections grid grid-cols-1 md:grid-cols-4 gap-4">
            {new_collection.map((item, i) => (
            <Item key={i} id={item.id} name={item.name} image={item.image} new_price ={item.new_price} old_price ={item.old_price} />
            ))}
        </div>
        </div>
    );
    }

export default NewCollections;
