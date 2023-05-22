import {SafeAreaView} from "react-native";
import styles from "./cardAttraction.style";
import {useNavigation} from "@react-navigation/native";
import TouchableOpacityCardAttraction from "./ToauchableOpacityCustom/TouchableOpacityCardAttraction";

const CardCity = ({image, city, name, id, preview}) => {

    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.cardContainer}>
            <TouchableOpacityCardAttraction
                image={image}
                preview={preview}
                firstText={name}
                secondText={city}
                id={id}
                navigation={navigation}
            />
        </SafeAreaView>
    )
}

export default CardCity;


