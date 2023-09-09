import {
	SafeAreaView,
	View,
	FlatList,
	StyleSheet,
	Text,
	StatusBar,
} from 'react-native';

const DATA = [
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
		title: '1 Item',
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
		title: '2 Item',
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d72',
		title: '3 Item',
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d73',
		title: '4 Item',
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d74',
		title: '5 Item',
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d75',
		title: '6 Item',
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d76',
		title: '7 Item',
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d77',
		title: '8 Item',
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d78',
		title: '9 Item',
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d79',
		title: '10 Item',
	},
];

const Item = ({ title }) => (
	<View style={styles.item}>
		<Text style={styles.title}>{title}</Text>
	</View>
);

export const Flat = () => {
	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={DATA}
				renderItem={({ item }) => <Item title={item.title} />}
				keyExtractor={(item) => item.id}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight || 0,
	},
	item: {
		backgroundColor: '#f9c2ff',
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
	},
	title: {
		fontSize: 32,
	},
});
