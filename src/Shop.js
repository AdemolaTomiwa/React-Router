import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './App.css';

function Shop() {
   useEffect(() => {
      fetchItems();
   }, []);

   const [items, setItems] = useState([]);

   const fetchItems = async () => {
      const data = await fetch(
         'https://jsonplaceholder.typicode.com/photos?_limit=10'
      );

      const items = await data.json();
      console.log(items);
      setItems(items);
   };
   return (
      <div>
         {items.map((item) => (
            <p key={item.id}>
               <Link to={`/shop/${item.url}`}>{item.title}</Link>
            </p>
         ))}
      </div>
   );
}

export default Shop;
