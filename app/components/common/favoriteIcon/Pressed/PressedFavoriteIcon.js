import { TouchableOpacity, Image} from 'react-native'
import styles from "../NotPressed/favoriteIcon.style";
import {icons} from "../../../../../constants";

const PressedFavoriteIcon = () => {

    const handlePress = () => {
        console.log("i already like this Attractions")
    }

    return (
        <TouchableOpacity style={styles.iconContainer} onPress={handlePress}>
            <Image
                source={icons.pressedFavoriteIcon}
                resizeMode='cover'
                style={styles.iconImg}
            />
        </TouchableOpacity>
    )
}

export default PressedFavoriteIcon;