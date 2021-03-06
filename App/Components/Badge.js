import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';

const styles = StyleSheet.create({
	image: {
		height: 125,
		width: 125,
		borderRadius: 65,
		marginTop: 10,
		alignSelf: 'center'
	},
	container: {
		backgroundColor: '#48BBEC',
		paddingBottom: 10
	},
	name: {
		alignSelf: 'center',
		fontSize: 21,
		marginTop: 10,
		marginBottom: 5,
		color: 'white'
	},
	handle: {
		alignSelf: 'center',
		fontSize: 16,
		color: 'white'
	}
})

class Badge extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Image style={styles.image} source={{uri: this.props.userinfo.avatar_url}} />
				<Text style={styles.name} >{this.props.userinfo.name}</Text>
				<Text style={styles.handle}>{this.props.userinfo.login}</Text>
			</View>
		)
	}

}

Badge.propTypes = {
	userinfo: React.PropTypes.object.isRequired
};

module.exports = Badge;
