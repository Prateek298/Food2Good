import React, { useContext } from 'react';
import { FlatList } from 'react-native';

import { Spacer } from '../../components/utilities';
import HistoryOrder from '../../components/historyOrder/historyOrder-comp';

import { UserSavesContext } from '../../services/userSaves/userSaves-context';

const OrdersScreen = ({ navigation }) => {
	const { orderHistory } = useContext(UserSavesContext);
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
