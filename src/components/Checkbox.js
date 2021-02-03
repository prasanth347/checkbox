import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Checkbox = ({DATA}) => {
	const [selected, setSelected] = React.useState(new Map());
	const onSelect = React.useCallback(
						(key, text) => {
						  const newSelected = new Map(selected);
						  newSelected.set(key, !selected.get(key));
						  setSelected(newSelected);
						}, [selected] );
	return (
		<FlatList
			data={DATA}
			renderItem={({ item }) => (
				<Item
					id={item.key}
					title={item.text}
					selected={!!selected.get(item.key)}
					onSelect={onSelect}
				/>
			)}
			keyExtractor={item => item.key}
			extraData={selected}
		/>
	);
};


function Item({ id, title, selected, onSelect }) {
  return (
    <TouchableOpacity
      onPress={() => { onSelect(id, title); }}
      style={[ styles.item]}
    >
		<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
			
			{ selected 
				? (<FontAwesome name='check' size={20} />)
				: (<FontAwesome name='square-o' size={20} />)
			}
			<Text>{title}</Text>
		</View>
	</TouchableOpacity>
  );
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

export default Checkbox;
