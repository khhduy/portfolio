import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
	return (
		<div className='cards'>
			<h1>Projects</h1>
			<div className='cards__container'>
				<div className='cards__wrapper'>
					<ul className='cards__items'>
						<CardItem
							src='images/img-1.jpg'
							text='Implement page rank algorithm to rank website (sub-link) in search result'
							label='Page Rank Algorithm'
							link='https://github.com/kzduy/pyspark-pagerank'
						/>
						<CardItem
							src='images/img-2.jpg'
							text='Use Vue to consume API of Rest Countries with some cool features added, deployed but netlify banned my account due to fraud detection??? :DD'
							label='Rest countries API'
							link='/'
						/>
						<CardItem
							src='images/img-3.jpg'
							text='API for manage flight booking and analytics'
							label='Flight API Service'
							link='https://github.com/kzduy/.NETCore-WebAPI-MVC/tree/main/FlightManagementSystem'
						/>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Cards;