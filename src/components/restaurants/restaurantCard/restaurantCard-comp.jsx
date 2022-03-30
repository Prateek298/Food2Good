import React from 'react';
import { SvgXml } from 'react-native-svg';
import { Card } from 'react-native-paper';

import { Text, Spacer } from '../../utilities';
import { RatingStatusContainer, Row, Icon } from './restaurantCard-styles';

import star from '../../../../assets/star';
import open from '../../../../assets/open';

import FavouritesIcon from '../favouritesIcon/favouritesIcon-comp';

const RestaurantCard = ({ restaurant = {} }) => {
	const { name, icon, photos, address, isOpenNow, rating, isClosedTemporarily } = restaurant;

	const ratingsArr = Array.from(new Array(Math.round(rating)));

	return (
		<Spacer variants="mb-2">
			<Card elevation={5}>
				<Spacer variants="p-2">
					<Card.Cover source={{ uri: photos[0] }} />
					<FavouritesIcon restaurant={restaurant} />
				</Spacer>
				<Spacer variants="p-2">
					<Text font="heading" size="title">
						{name}
					</Text>
					<Spacer variants="mb-1" />
					<Text font="body" size="caption">
						{address}
					</Text>
					<RatingStatusContainer>
						<Row>{ratingsArr.map((_, i) => <SvgXml key={i} xml={star} width={20} height={20} />)}</Row>
						<Row>
							{isClosedTemporarily && (
								<Spacer variants="pl-2 pr-2">
									<Text color="error" size="button">
										CLOSED TEMPORARILY
									</Text>
								</Spacer>
							)}
							{isOpenNow && <SvgXml xml={open} width={20} height={20} />}
							<Icon source={{ uri: icon }} />
						</Row>
					</RatingStatusContainer>
				</Spacer>
			</Card>
		</Spacer>
	);
};

export default RestaurantCard;
