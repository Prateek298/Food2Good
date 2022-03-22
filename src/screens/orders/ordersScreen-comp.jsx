import React, { useContext } from 'react';
import { FlatList } from 'react-native';

import { ContentCenterContainer, Spacer, SymbolIcon, Text } from '../../components/utilities';

import HistoryOrder from '../../components/historyOrder/historyOrder-comp';

import { UserSavesContext } from '../../services/userSaves/userSaves-context';

const OrdersScreen = ({ navigation }) => {
	const { orderHistory } = useContext(UserSavesContext);

	if (!orderHistory.length)
		return (
			<ContentCenterContainer>
				<Text>No orders placed yet...</Text>
				<Spacer variants="mt-2 mb-2">
					<SymbolIcon icon={{ uri: 'https://img.icons8.com/ios-filled/344/order-history.png' }} size={128} />
				</Spacer>
				<Text>Try ordering some dishes you love</Text>
			</ContentCenterContainer>
		);

	return (
		<Spacer variants="p-2">
			<FlatList
				data={orderHistory}
				renderItem={({ item }) => <HistoryOrder order={item} onNavigate={navigation.navigate} />}
				keyExtractor={item => item.id}
			/>
		</Spacer>
	);
};

export default OrdersScreen;
