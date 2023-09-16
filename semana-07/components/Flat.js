import { StatusBar } from 'expo-status-bar';
import {
	SafeAreaView,
	View,
	FlatList,
	StyleSheet,
	Text,
	StatusBar as RNStatusBar,
	ActivityIndicator,
	Image,
} from 'react-native';
import { useFetch } from '../hooks/useFetch';

const Item = ({ title, image }) => (
	<View
		style={[
			styles.item,
			{ justifyContent: 'center', alignItems: 'center', gap: 5 },
		]}
	>
		<Text style={styles.title}>{title}</Text>

		<Image source={{ uri: image }} width={300} height={300} />
	</View>
);

export const Flat = () => {
	const { data, error, isLoading } = useFetch(
		'https://rickandmortyapi.com/api/character'
	);

	if (isLoading) {
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<ActivityIndicator />
		</View>;
	}

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={data?.results}
				renderItem={({ item }) => <Item title={item.name} image={item.image} />}
				keyExtractor={(item) => item.id}
			/>
			<StatusBar style="auto" />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: RNStatusBar.currentHeight || 0,
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
