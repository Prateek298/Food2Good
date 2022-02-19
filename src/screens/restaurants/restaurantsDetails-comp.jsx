import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { List } from 'react-native-paper';

import SafeAreaContainer from '../../components/utilities/SafeAreaContainer-comp';

import RestaurantCard from '../../components/restaurantCard/restaurantCard-comp';

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
						<List.Item title="Bread & Butter" />
						<List.Item title="Omellete" />
					</List.Accordion>
					<List.Accordion
						title="Lunch"
						left={props => <List.Icon {...props} icon="hamburger" />}
						expanded={isLunchExpanded}
						onPress={() => setIsLunchExpanded(!isLunchExpanded)}
					>
						<List.Item title="Burger w/ Fries" />
						<List.Item title="Steak Sandwich" />
						<List.Item title="Mushroom Soup" />
					</List.Accordion>
					<List.Accordion
						title="Dinner"
						left={props => <List.Icon {...props} icon="food-variant" />}
						expanded={isDinnerExpanded}
						onPress={() => setIsDinnerExpanded(!isDinnerExpanded)}
					>
						<List.Item title="Spaghetti Bolognese" />
						<List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
						<List.Item title="Steak Frites" />
					</List.Accordion>
					<List.Accordion
						title="Drinks"
						left={props => <List.Icon {...props} icon="cup" />}
						expanded={isDrinksExpanded}
						onPress={() => setIsDrinksExpanded(!isDrinksExpanded)}
					>
						<List.Item title="Coffee" />
						<List.Item title="Tea" />
						<List.Item title="Coke" />
						<List.Item title="Mango Drink" />
					</List.Accordion>
				</List.Section>
			</ScrollView>
		</SafeAreaContainer>
	);
};

export default RestaurantDetails;
