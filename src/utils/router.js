import React, { useEffect, useState } from 'react';

const Router = ({ path, children }) => {
	const [currentPath, setCurrentPath] = useState(window.location.pathname)

	useEffect(() => {

		function onLocationChange (e) {
			// the sole purpose is to get the router component rerender itself
			setCurrentPath(window.location.pathname)
			console.log(e)
		}

		window.addEventListener('popstate', onLocationChange)

		return () => {
			window.removeEventListener('popstate', onLocationChange)
		}
	}, [])

	return window.location.pathname === path
		? children
		: null
};

export default Router;
