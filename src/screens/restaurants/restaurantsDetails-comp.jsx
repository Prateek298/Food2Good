import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { List } from 'react-native-paper';

import { SafeAreaContainer } from '../../components/utilities';

import RestaurantCard from '../../components/restaurantCard/restaurantCard-comp';
import MenuItem from '../../components/menuItem/menuItem-comp';

import { menu } from '../../services/menu-mock';

const RestaurantDetails = ({ route }) => {
	const [ isBreakfastExpanded, setIsBreakfastExpanded ] = useState(false);
	const [ isLunchExpanded, setIsLunchExpanded ] = useState(false);
	const [ isDinnerExpanded, setIsDinnerExpanded ] = useState(false);
	const [ isDrinksExpanded, setIsDrinksExpanded ] = useState(false);

	const { restaurant } = route.params;

	return (
		<SafeAreaContainer>
			<RestaurantCard restaurant={restaurant} />
			<ScrollView>
				<List.Section>
					<List.Accordion
						title="Breakfast"
						left={props => <List.Icon {...props} icon="bread-slice" />}
						expanded={isBreakfastExpanded}
						onPress={() => setIsBreakfastExpanded(!isBreakfastExpanded)}
					>
						{menu.breakfast.map(item => <MenuItem key={item.id} restaurant={restaurant} item={item} />)}
					</List.Accordion>
					<List.Accordion
						title="Lunch"
						left={props => <List.Icon {...props} icon="hamburger" />}
						expanded={isLunchExpanded}
						onPress={() => setIsLunchExpanded(!isLunchExpanded)}
					>
						{menu.lunch.map(item => <MenuItem key={item.id} restaurant={restaurant} item={item} />)}
					</List.Accordion>
					<List.Accordion
						title="Dinner"
						left={props => <List.Icon {...props} icon="food-variant" />}
						expanded={isDinnerExpanded}
						onPress={() => setIsDinnerExpanded(!isDinnerExpanded)}
					>
						{menu.dinner.map(item => <MenuItem key={item.id} restaurant={restaurant} item={item} />)}
					</List.Accordion>
					<List.Accordion
						title="Drinks"
						left={props => <List.Icon {...props} icon="cup" />}
						expanded={isDrinksExpanded}
						onPress={() => setIsDrinksExpanded(!isDrinksExpanded)}
					>
						{menu.drinks.map(item => <MenuItem key={item.id} restaurant={restaurant} item={item} />)}
					</List.Accordion>
				</List.Section>
			</ScrollView>
		</SafeAreaContainer>
	);
};

export default RestaurantDetails;
