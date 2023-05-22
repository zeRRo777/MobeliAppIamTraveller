import {Text, View} from "react-native";
import styles from "./mapComponent.style";
import {useEffect} from "react";

const MapComponent = () => {

    return (
        <View style={styles.mainContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.textStyle}>Месторасположение достопримичательности</Text>
            </View>
        </View>
    )
}

export default MapComponent;