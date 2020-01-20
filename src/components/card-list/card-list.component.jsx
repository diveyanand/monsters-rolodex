import React from 'react';
import './card-list.styles.css';
import {Card} from '../card/card.component';

// CardList is the component that stores a collection of Card components
export const CardList = props => (
	<div className='card-list'> 
		{
			props.monsters.map (
				monster => (
					<Card key={monster.id} monster = {monster} />
				)
			)
		} 
	</div>
);	