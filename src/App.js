import React from 'react';
import Home from './components/home'
import Cart from './components/cart'
import Router from './utils/router'
import Link from './utils/link'

const App = (props) => {
	return (
		<div className='App' style={{ display: 'flex', gap: '10px', alignItems: 'flex-start'}}>
			<Link urlName={'Home'} href={'/home'} />
			<Link urlName={'Cart'} href={'/cart'} />

			<Router path={'/home'}>
				<Home />
			</Router>
			<Router path={'/cart'}>
				<Cart />
			</Router>
		</div>
	)
};

export default App;
