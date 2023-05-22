import { TouchableOpacity, Image} from 'react-native'
import styles from "./backButton.style";
import {icons} from "../../../../constants";
import {useNavigation} from "@react-navigation/native";

const BackBtn = () => {

    const navigation = useNavigation()
    const handlePress = () => {
        navigation.goBack()
    }

    return (
        <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
            <Image
                source={icons.left}
                resizeMode='cover'
                style={styles.btnImg}
            />
        </TouchableOpacity>
    )
}

export default BackBtn;