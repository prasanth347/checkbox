import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

class RadioButtonColumn extends Component {
	state = {
		value: null,
	};

	render() {
		const { IRRIGATION } = this.props;
		const { value } = this.state;
		return (
			<View>	
				{IRRIGATION.map(res => {
					return (
						<View key={res.key} style={styles.container}>
							<TouchableOpacity
								style={styles.radioCircle}
								onPress={() => {
									this.setState({
										value: res.key,
									});
								}}>
								{value === res.key && <View style={styles.selectedRb} />}
							</TouchableOpacity>
							<Text style={styles.radioText} onPress={() => { this.setState({value: res.key,})}}>{res.text}</Text>
						</View>
					);
				})}
				{/* <Text> Selected: {this.state.value} </Text> */}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flexDirection: 'row',
		marginVertical: 5,
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	radioText: {
		fontSize: 14,
		marginHorizontal: 2,
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

export default RadioButtonColumn;
