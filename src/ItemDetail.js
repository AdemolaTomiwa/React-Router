import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './App.css';

function Item() {
   useEffect(() => {
      fetchItem();
   }, []);

   const [item, setItem] = useState();

   const fetchItem = async () => {
      const fetchItem = await fetch(
         `https://jsonplaceholder.typicode.com/albums&_limit=10`
      );

      const item = await fetchItem.json();

      console.log(item);
   };
   return (
      <div>
         <h1>Item</h1>
      </div>
   );
}

export default Item;
