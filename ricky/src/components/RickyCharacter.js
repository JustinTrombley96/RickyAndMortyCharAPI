import React from 'react';

const RickyCharacter = (props) => {
	return (
		<div>
			<h1>Name: {props.name}</h1>
			<p>Status: {props.status}</p>
			<p>{props.species}</p>
			<img src={props.url} />
		</div>
	);
};
export default RickyCharacter;
