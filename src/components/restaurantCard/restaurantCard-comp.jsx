import React from 'react';
import { SvgXml } from 'react-native-svg';

import {
	StyledCard,
	CardCover,
	InfoContainer,
	Name,
	Address,
	RatingStatusContainer,
	Ratings,
	Status,
	ClosedTag,
	Icon
} from './restaurantCard-styles';

import star from '../../../assets/star';
import open from '../../../assets/open';

const RestaurantCard = ({ restaurant = {} }) => {
	const {
		name = 'Some Name',
		icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
		photos = [
			'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg'
		],
		vicinity = 'Sec-1, Vikas Nagar',
		isOpenNow = true,
		rating = 4,
		isClosedTemporarily = true
	} = restaurant;

	const ratingsArr = Array.from(new Array(Math.round(rating)));

	return (
		<StyledCard elevation={5}>
			<CardCover source={{ uri: photos[0] }} />
			<InfoContainer>
				<Name>{name}</Name>
				<Address>{vicinity}</Address>
				<RatingStatusContainer>
					<Ratings>{ratingsArr.map((_, i) => <SvgXml key={i} xml={star} width={20} height={20} />)}</Ratings>
					<Status>
						{isClosedTemporarily && <ClosedTag>CLOSED TEMPORARILY</ClosedTag>}
						{isOpenNow && <SvgXml xml={open} width={20} height={20} />}
						<Icon source={{ uri: icon }} />
					</Status>
				</RatingStatusContainer>
			</InfoContainer>
		</StyledCard>
	);
};

export default RestaurantCard;
