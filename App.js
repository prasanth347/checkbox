'use strict';
 
import React, { Component, useState, useEffect } from 'react'
import {
	StatusBar,
	Platform,
    AppRegistry,
    StyleSheet,
    View,
	Text,
    TextInput,
	Button,
	FlatList
} from 'react-native';
import RadioButton from './src/components/RadioButton';
import Checkbox from './src/components/Checkbox';
import Home from './src/Home';
import Second from './src/Second';
import Third from './src/Thrid';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const GENDER = [
	{key: 'yes', text: 'Yes'},
	{key: 'no', text: 'No'}
];

const List = [
	{ label: 'Sachin' },
	{ label: 'Soma' },
	{ label: 'Logesh' },
	{ label: 'Gokul' },
	{ label: 'Deepan' },
	{ label: 'Prasanth' },
	{ label: 'Sachin1' },
	{ label: 'Soma1' },
	{ label: 'Logesh1' },
	{ label: 'Gokul1' },
	{ label: 'Deepan1' },
	{ label: 'Prasanth1' },
	{ label: 'Sachin2' },
	{ label: 'Soma2' },
	{ label: 'Logesh2' },
	{ label: 'Gokul2' },
	{ label: 'Deepan2' },
	{ label: 'Prasanth2' },
	{ label: 'Sachin3' },
	{ label: 'Soma3' },
	{ label: 'Logesh3' },
	{ label: 'Gokul3' },
	{ label: 'Deepan3' },
	{ label: 'Prasanth3' },
];

const First = ({navigation}) => {
	const opt = {male: false, female: false, other: false};
	const [value, setValue] 	  = useState('Hii');
	const [selectedId, setSelect] = useState('');
	const [RES, setRES] 	  	  = useState([]);

	useEffect(() => {
		List.map((item, index) => {
			if(item.label === selectedId){
				RES[index]=({
					['name']: item.label, 
					['yes']:(value === 'yes' ? true : false),
					['no']:(value === 'no' ? true : false)
				})
			}
			else{
				RES[index]=({
					['name']: item.label, 
					['yes']:false,
					['no']:false
				})
			}
		});
	}, [value]);

	console.log(RES);

	const Item = ({item, index}) => {
		return (
			<View style={{flex: 1, alignItems: 'stretch'}} key={index} >
				<Text>{item.label}</Text>
				<Checkbox
					DATA={GENDER}
				/>		
			</View>
		);
	};

	return (
		<View style={styles.container}>
			<StatusBar />
			<Text>This Is my QRCode</Text>
			<Button title="Go Home" onPress={() => navigation.navigate('Home')} />
			<FlatList
				data={List}
				renderItem={Item}
				keyExtractor={item => item.label}
				extraData={selectedId}
			/>
			<Text>{selectedId + value}</Text>
		</View>
	);
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
		<Stack.Screen name="First" component={First} />
		<Stack.Screen name="Home" component={Home} />
		<Stack.Screen name="Second" component={Second} />
		<Stack.Screen name="Third" component={Third} />
	  </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
});
 
export default App;