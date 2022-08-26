import React from 'react';

const Link = ({ href, urlName }) => {
	function handleClick (e) {
		e.preventDefault()
		window.history.pushState({}, '', href)

		window.dispatchEvent(new PopStateEvent('popstate', {state: {name: 'yuehu'}}))
	}

	return (
		<div className='link'>
			<a href={href} onClick={handleClick}>{urlName}</a>
		</div>
	)
};

export default Link;
