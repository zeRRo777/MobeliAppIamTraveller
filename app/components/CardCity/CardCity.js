import {ImageBackground, Text,  View, SafeAreaView} from "react-native";
import TouchableOpacityCardCity from "../MyCustom/TouchableOpacityCardCity";
import styles from "./cardCity.style";
import {useNavigation} from "@react-navigation/native";

const CardCity = ({image, city, country, id}) => {

    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.cardContainer}>
            <TouchableOpacityCardCity image={image} city={city} country={country} id={id} navigation={navigation} />
        </SafeAreaView>
    )
}

export default CardCity;


