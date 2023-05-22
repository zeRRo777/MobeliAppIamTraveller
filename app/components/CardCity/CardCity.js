import {SafeAreaView} from "react-native";
import TouchableOpacityCardCity from "./TouchableOpacityCustom/TouchableOpacityCardCity";
import styles from "./cardCity.style";
import {useNavigation} from "@react-navigation/native";

const CardCity = ({image, city, country, id, direction}) => {

    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.cardContainer}>
            <TouchableOpacityCardCity
                image={image}
                firstText={city}
                secondText={country}
                id={id}
                navigation={navigation}
                direction={direction} />
        </SafeAreaView>
    )
}

export default CardCity;


