
'use strict';
 
import React, { Component } from 'react'
import QRCode from 'react-native-qrcode-svg';

import {
    AppRegistry,
    StyleSheet,
    View,
	Text,
    TextInput
} from 'react-native';

const hr = {marginVertical: 20};

class QRScreen extends Component {
	state = { text: 'pprasanth347@gmail.com' };
	render() {
		return (
		  <View style={styles.container}>
			<TextInput
				style={[styles.input, hr]}
				onChangeText={(text) => this.setState({text: text})}
				value={this.state.text}
			/>
			<QRCode value={this.state.text} size={200} />
		  </View>
		);
	};
}
 
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'stretch',
        justifyContent: 'center'
    },
	txt: {
		textAlign: 'center'
	},
    input: {
		borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
		textAlign: 'center'
    }
});
 
AppRegistry.registerComponent('QRScreen', () => QRScreen);
 
module.exports = QRScreen;