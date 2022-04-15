import React from 'react';
import Products from './Products.jsx';

const Main = () => {
  console.log(Products);

  /* 
    On boucle sur les produits dans notre catalogue
    Dans REACT, on utilise .map au lieu de for
    On peut traduire le code ci-dessous par 
      Products.forEach(item => {xxxxx})
      for(let i = 0; i < Products.length; i++) {xxxxx}
  */

  const listItems = Products.map((item) => 
    <div className="card" key={item.id}>
      <div className="card_img">
        <img src={item.image} />
      </div>
      <div className="card_header">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p className='price'>{item.price}<span>{item.currency}</span></p>
        <div className='btn'>Ajouter au panier</div>
      </div>
    </div>
  );

  return(
    <div className="main_content">
      <h1>Meilleures ventes</h1>
      {listItems}
    </div>
  )


}
export default Main;