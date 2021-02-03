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
			<Text>HomeScreen</Text>
			<Button title="Go Sec" onPress={() => navigation.navigate('Second')} />
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