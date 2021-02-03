'use strict';
 
import React, { Component, useState, useEffect } from 'react'
import {
	View,
	Text,
    TextInput,
	Button,
	StyleSheet
} from 'react-native';

const Home = ({navigation}) => {
	return (
		<>
			<Text>SecondScreen</Text>
			<Button title="Go Third" onPress={() => navigation.navigate('Third')} />
		</>
	);
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
});
 
export default Home;