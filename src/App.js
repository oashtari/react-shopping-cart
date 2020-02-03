import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

import ProductContext from './contexts/ProductContext';
import CartContext from './contexts/CartContext';


function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	useEffect(() => console.log('IN CART', cart), [cart]);

	const removeItem = item => {
		let theCart = cart;
		console.log('new array', theCart);
		console.log(theCart[0])

		console.log('now in cart', cart)
	}

	return (
		<div className="App">

			<ProductContext.Provider value={{ products, addItem }}>
				<CartContext.Provider value={{ cart, setCart, removeItem }}>

					<Navigation cart={cart} />

					<Route exact path="/" component={Products} />

					<Route path="/cart" component={ShoppingCart} />

				</CartContext.Provider>
			</ProductContext.Provider >

		</div >
	);
}

export default App;
