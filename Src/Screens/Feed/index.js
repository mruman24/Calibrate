import React, { Component } from 'react';
import {
	View,
	Image,
	Text,
	ImageBackground,
	TouchableOpacity,
	SafeAreaView,
	Dimensions,
	ScrollView
} from 'react-native';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import Styles from './Styles';

const widthScreen = Dimensions.get('window').width;

class Feed extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	render() {
		return (
			<>
				<SafeAreaView style={Styles.safeAreaContainer}>
					<ScrollView>

						<View style={Styles.header}>
							<View />
							<Image source={Images.Logo} style={Styles.logo} />
							{/* <Image source={Images.Avatar} style={Styles.avatar} /> */}
						</View>

						{/* <View style={Styles.line} /> */}

						<View style={Styles.tagWrapper}>
							<View style={Styles.direction}>

								<View style={Styles.tagContainer}>
									<Text style={Styles.containerText}>{"Drops"}</Text>
								</View>

								<View style={Styles.tagContainer}>
									<Text style={Styles.containerText}>{"Promos"}</Text>
								</View>

								<View style={Styles.tagContainer}>
									<Text style={Styles.containerText}>{"Giveaways"}</Text>
								</View>

								<View style={Styles.tagContainer}>
									<Text style={Styles.containerText}>{"Challenges"}</Text>
								</View>

							</View>
						</View>

						<ImageBackground source={Images.BehindDesign} style={Styles.background}>

							<View style={Styles.direction}>
								<View style={{ flexDirection: 'row' }}>
									<TouchableOpacity>
										<Image source={Images.Share} style={Styles.shareFeed} />
									</TouchableOpacity>
									<TouchableOpacity>
										<Image source={Images.Like} style={Styles.likeFeed} />
									</TouchableOpacity>
								</View>
								<TouchableOpacity>
									<Image source={Images.EnterButton} style={Styles.enterButton} />
								</TouchableOpacity>
							</View>

						</ImageBackground>

						<View source={Images.BehindDesign} style={Styles.featuredFeed}>
							<Text style={Styles.featured}>{"Featured"}</Text>
							<View style={{ width: widthScreen / 1.12, alignSelf: 'center' }}>
								<Image source={Images.Authentic} style={Styles.shoes} />
							</View>
							{/* <View style={Styles.direction}>
								<TouchableOpacity>
									<Image source={Images.Share} style={Styles.icons} />
								</TouchableOpacity>
								<TouchableOpacity>
									<Image source={Images.Like} style={Styles.icons} />
								</TouchableOpacity>
								<TouchableOpacity>
									<Image source={Images.EnterButton} style={Styles.enterButton} />
								</TouchableOpacity>
							</View> */}
						</View>

						<ImageBackground source={Images.WeekWidget} style={Styles.background}>

							<View style={Styles.direction}>
								<View style={{ flexDirection: 'row' }}>
									<TouchableOpacity>
										<Image source={Images.ShareNow} style={Styles.shareFeed} />
									</TouchableOpacity>
									<TouchableOpacity>
										<Image source={Images.Favourite} style={Styles.likeFeed} />
									</TouchableOpacity>
								</View>
								<TouchableOpacity>
									<Image source={Images.Enter} style={Styles.enterButton} />
								</TouchableOpacity>
							</View>

						</ImageBackground>

						<ImageBackground source={Images.Street} style={Styles.background}>

							<View style={Styles.direction}>
								<View style={{ flexDirection: 'row' }}>
									<TouchableOpacity>
										<Image source={Images.ShareNow} style={Styles.shareFeed} />
									</TouchableOpacity>
									<TouchableOpacity>
										<Image source={Images.Favourite} style={Styles.likeFeed} />
									</TouchableOpacity>
								</View>
								<TouchableOpacity>
									<Image source={Images.Enter} style={Styles.enterButton} />
								</TouchableOpacity>
							</View>

						</ImageBackground>

						<ImageBackground source={Images.HighTop} style={Styles.background}>

							<View style={Styles.direction}>
								<View style={{ flexDirection: 'row' }}>
									<TouchableOpacity>
										<Image source={Images.Share} style={Styles.shareFeed} />
									</TouchableOpacity>
									<TouchableOpacity>
										<Image source={Images.Like} style={Styles.likeFeed} />
									</TouchableOpacity>
								</View>
								<TouchableOpacity>
									<Image source={Images.EnterButton} style={Styles.enterButton} />
								</TouchableOpacity>
							</View>

						</ImageBackground>

					</ScrollView>
				</SafeAreaView>
			</>
		)
	}
}
export default Feed;