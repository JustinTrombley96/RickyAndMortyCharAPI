import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RickyCharacter from './RickyCharacter';
import styled from 'styled-components';

const RickyList = () => {
	const [ Characters, setCharacters ] = useState([]);

	useEffect(() => {
		axios.get(`https://rickandmortyapi.com/api/character/`).then((response) => {
			console.log(response.data.results);
			setCharacters(response.data.results);
		}, []);
	});

	return (
		<div>
			{Characters.map((character) => {
				return (
					<RickyCharacter
						key={character.id}
						name={character.name}
						status={character.status}
						species={character.species}
						url={character.image}
					/>
				);
			})}
		</div>
	);
};

export default RickyList;
