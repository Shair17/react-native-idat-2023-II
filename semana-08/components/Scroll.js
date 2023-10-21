import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
	View,
	Text,
	Button,
	TouchableOpacity,
	TextInput,
	Image,
	StyleSheet,
	ToastAndroid,
	ActivityIndicator,
	Alert,
	Linking,
	Switch,
	StatusBar as RNStatusBar,
	TouchableNativeFeedback,
	ScrollView,
	RefreshControl,
	BackHandler,
	Dimensions,
	Pressable,
	Modal,
} from 'react-native';
import { wait } from '../utils/wait';

export const Scroll = () => {
	const [contador, setContador] = useState(1);
	const [switchChecked, setSwitchChecked] = useState(false);
	const [isRefreshing, setIsRefreshing] = useState(false);
	const [modalVisible, setModalVisible] = useState(false);
	const [phone, setPhone] = useState('');
	const dimensionsScreen = Dimensions.get('screen');
	const dimensionsWindow = Dimensions.get('window');

	const onRefresh = async () => {
		setIsRefreshing(true);
		await wait(1);
		setIsRefreshing(false);
	};

	return (
		<ScrollView
			style={styles.scrollView}
			refreshControl={
				<RefreshControl
					refreshing={isRefreshing}
					onRefresh={onRefresh}
				></RefreshControl>
			}
		>
			<View style={styles.container}>
				<Text>Hola mundo desde IDAT!</Text>

				<TextInput
					style={styles.input}
					value={phone}
					keyboardType="number-pad"
					onChangeText={(value) => setPhone(value)}
					maxLength={9}
					placeholder="Ingresa el número de teléfono para hacer la recarga"
				/>

				<Button
					title="Hacer recarga"
					onPress={() => {
						Linking.openURL(`tel:789*8*1*${phone}`);
					}}
				></Button>

				<Button
					title="Salir de la app"
					onPress={() => {
						Alert.alert(
							'Salir de la app',
							'Seguro que quieres salir de la app???',
							[
								{
									text: 'No',
								},
								{ onPress: () => BackHandler.exitApp(), text: 'Si' },
							],
							{
								cancelable: true,
							}
						);
					}}
				></Button>

				<TouchableOpacity
					style={styles.botonTO}
					activeOpacity={0.8}
					onPress={() => {
						ToastAndroid.show(
							`Mensaje con toast android ${contador}`,
							ToastAndroid.SHORT
						);
						setContador(contador + 1);
					}}
				>
					<Text style={styles.botonTOTexto}>
						Soy un botón con TouchableOpacity
					</Text>
				</TouchableOpacity>

				<View style={{ borderRadius: 8, overflow: 'hidden' }}>
					<TouchableNativeFeedback
						background={TouchableNativeFeedback.Ripple('#64BF1E', true)}
						onPress={() => {
							Linking.openURL('https://shair.dev');
						}}
					>
						<View style={styles.botonTNF}>
							<Text style={styles.botonTNFTexto}>
								Soy un botón con TouchableNativeFeedback
							</Text>
						</View>
					</TouchableNativeFeedback>
				</View>

				<View
					style={{
						height: 180,
						flexDirection: 'row',
						gap: 10,
					}}
				>
					<Image
						style={styles.imagen}
						source={{ uri: 'https://picsum.photos/200?1' }}
						resizeMode="contain"
					/>

					<Image
						style={styles.imagen}
						source={{ uri: 'https://picsum.photos/200?2' }}
						resizeMode="contain"
					/>
				</View>

				{[
					...Array.from({ length: 10 })
						.fill('')
						.map((_, key) => (
							<TextInput
								key={key}
								style={styles.input}
								placeholder="Ingresa un texto aquí"
							/>
						)),
				]}

				<View
					style={{
						flexDirection: 'row',
						gap: 10,
						justifyContent: 'space-between',
					}}
				>
					<ActivityIndicator size={10} />
					<ActivityIndicator size={15} />
					<ActivityIndicator size={20} />
					<ActivityIndicator size={25} />
					<ActivityIndicator size={30} />
					<ActivityIndicator size={35} />
					<ActivityIndicator size={40} />
					<ActivityIndicator size={50} />
				</View>

				<View
					style={{
						flexDirection: 'row',
						gap: 10,
						justifyContent: 'space-between',
					}}
				>
					<Switch value={switchChecked} onValueChange={setSwitchChecked} />
					<Switch value={switchChecked} onValueChange={setSwitchChecked} />
					<Switch value={switchChecked} onValueChange={setSwitchChecked} />
					<Switch value={switchChecked} onValueChange={setSwitchChecked} />
					<Switch value={switchChecked} onValueChange={setSwitchChecked} />
					<Switch value={switchChecked} onValueChange={setSwitchChecked} />
				</View>

				<View style={{ flexDirection: 'row', gap: 10 }}>
					<View style={{ flex: 1 }}>
						<Text style={{ fontSize: 10 }}>
							{JSON.stringify(dimensionsScreen)}
						</Text>
					</View>

					<View style={{ flex: 1 }}>
						<Text style={{ fontSize: 10 }}>
							{JSON.stringify(dimensionsWindow)}
						</Text>
					</View>
				</View>

				<Modal
					animationType="fade"
					visible={modalVisible}
					transparent
					onRequestClose={() => {
						Alert.alert('Modal has been closed.');
						setModalVisible(!modalVisible);
					}}
				>
					<View style={styles.centeredView}>
						<View style={styles.modalView}>
							<Text style={styles.modalText}>Hello World!</Text>
							<Pressable
								style={[styles.button, styles.buttonClose]}
								onPress={() => setModalVisible(!modalVisible)}
							>
								<Text style={styles.textStyle}>Hide Modal</Text>
							</Pressable>
						</View>
					</View>
				</Modal>
				<Pressable
					style={[styles.button, styles.buttonOpen]}
					onPress={() => setModalVisible(true)}
				>
					<Text style={styles.textStyle}>Show Modal</Text>
				</Pressable>

				<StatusBar style="auto" />
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	scrollView: {
		marginTop: RNStatusBar.currentHeight,
	},
	container: {
		flex: 1,
		backgroundColor: '#fff',
		padding: 15,
		gap: 10,
	},
	botonTO: {
		backgroundColor: '#D6E4FF',
		borderRadius: 8,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 5,
		paddingVertical: 10,
	},
	botonTOTexto: {
		color: '#091A7A',
		fontWeight: '600',
	},
	botonTNF: {
		backgroundColor: '#EDFBD1',
		borderRadius: 8,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 5,
		paddingVertical: 10,
		overflow: 'hidden',
	},
	botonTNFTexto: {
		color: '#175B05',
		fontWeight: '600',
	},
	imagen: {
		flex: 1,
		borderRadius: 8,
		overflow: 'hidden',
	},
	input: {
		backgroundColor: '#f4f4f4',
		color: '#000',
		padding: 10,
		borderRadius: 8,
	},

	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22,
		backgroundColor: 'rgb(0,0,0,0.5)',
	},
	modalView: {
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 35,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},
	buttonOpen: {
		backgroundColor: '#F194FF',
	},
	buttonClose: {
		backgroundColor: '#2196F3',
	},
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	modalText: {
		marginBottom: 15,
		textAlign: 'center',
	},
});
