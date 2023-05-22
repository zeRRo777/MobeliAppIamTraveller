import {Animated, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import styles from "./TouchableOpacityCardCity.style";




class TouchableOpacityCardCity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scaleValue: new Animated.Value(1),
        }
    }

    scaleDown = () => {
        Animated.timing(this.state.scaleValue, {
            toValue: 0.9,
            duration: 500,
            useNativeDriver: true
        }).start();
    }

    scaleUp = () => {
        Animated.timing(this.state.scaleValue, {
            toValue: 1, // устанавливаем конечное значение масштаба
            duration: 500,
            useNativeDriver: true // используем анимацию на стороне нативных модулей
        }).start();
    }

    handlePress = () => {
        this.props.navigation.navigate('WithoutTabNavigator', {screen: 'Attractions', params: {id: this.state.id}})
    }

    render() {
        let {scaleValue} = this.state;
        return (
            <Animated.View style={{transform: [{scale: scaleValue}]}}>
                <TouchableOpacity
                    onPressIn={this.scaleDown}
                    activeOpacity={1}
                    onPressOut={this.scaleUp}
                    onPress={this.handlePress}
                >
                    <ImageBackground
                        source={this.props.image}
                        resizeMode={"cover"}
                        style={styles.ImageStyle}
                        imageStyle={styles.imageBackgroundStyle}
                    >
                        <View style={styles.textContainer}>
                            <Text style={styles.FirstTextStyle}>{this.props.firstText}</Text>
                            <Text style={styles.SecondTexStyle}>{this.props.secondText}</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </Animated.View>
        )
    }
}

export default TouchableOpacityCardCity;
