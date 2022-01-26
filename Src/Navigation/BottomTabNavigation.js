// import React from 'react';
// import { Image, View, StyleSheet } from 'react-native';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import Colors from '../Styles/Colors';
// import Images from '../Styles/Images';
// import Feed from '../Screens/Feed';
// import Task from '../Screens/Task';

// export default createBottomTabNavigator(
// 	{
// 		Feed: { screen: Feed },
// 		Task: { screen: Task }
// 	},
// 	{
// 		defaultNavigationOptions: ({ navigation }) => ({
// 			tabBarIcon: ({ focused }) => {
// 				const { routeName } = navigation.state;
// 				let source;
// 				let title;

// 				switch (routeName) {
// 					case 'Feed':
// 						source = Images.Feed;
// 						title = 'Feed';
// 						break;
// 					case 'Task':
// 						source = Images.Locker;
// 						title = 'Task';
// 						break;
// 					default:
// 						source = Images.Feed;
// 						title = 'Feed';
// 				}

// 				return (
// 					<View style={[styles.container, focused && styles.containerFocused]}>
// 						<Image resizeMode="contain" source={source} style={[styles.icon, focused && styles.iconFocused]} />
// 						<View style={[styles.indicator, focused && styles.indicatorFocused]} />
// 					</View>
// 				);
// 			},
// 		}),
// 		tabBarOptions: {
// 			showLabel: false,
// 			style: {
// 				height: 60,
// 				position: 'absolute',
// 				justifyContent: 'center',
// 				alignItems: 'center',
// 				backgroundColor: "transparent"
// 			}
// 		}
// 	},
// );


// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		justifyContent: 'center',
// 		alignItems: 'center'
// 	},
// 	containerFocused: {
// 		flex: 1,
// 		justifyContent: 'center',
// 		alignItems: 'center'
// 	},
// 	icon: {
// 		width: 24,
// 		height: 24,
// 	},
// 	iconFocused: {
// 		width: 24,
// 		height: 24,
// 		tintColor: Colors.Blue
// 	},
// 	indicator: {
// 		width: 24,
// 		height: 2
// 	},
// 	indicatorFocused: {
// 		width: 24,
// 		height: 2,
// 		backgroundColor: Colors.Blue
// 	},
// });