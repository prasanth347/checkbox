import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

class RadioButton extends Component {
	state = { value: null };
	render() {
		const { IRRIGATION, selector, callback } = this.props;
		const { value } = this.state;
		return (
			<View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
				{IRRIGATION.map(res => {
					return (
						<TouchableOpacity
							key={res.key}
							style={styles.container}
							onPress={() => {
									callback(res.key, selector);
									this.setState({ value: res.key });
								}}
						>
							<View style={styles.radioCircle} >
								{res.key == value && <View style={styles.selectedRb} />}
							</View>
							<Text style={styles.radioText} >
								{res.text}
							</Text>
						</TouchableOpacity>
					);
				})}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	radioText: {
		fontSize: 14,
		marginHorizontal: 3,
		color: '#194000',
	},
	radioCircle: {
		height: 15,
		width: 15,
		borderRadius: 100,
		borderWidth: 1,
		borderColor: '#194000',
		alignItems: 'center',
		justifyContent: 'center',
	},
	selectedRb: {
		width: 10,
		height: 10,
		borderRadius: 50,
		backgroundColor: '#194000',
    },
});

export default RadioButton;
