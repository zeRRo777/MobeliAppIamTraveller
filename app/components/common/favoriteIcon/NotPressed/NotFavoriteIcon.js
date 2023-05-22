import { TouchableOpacity, Image} from 'react-native'
import styles from "./favoriteIcon.style";
import {icons} from "../../../../../constants";

const NotFavoriteIcon = () => {

    const handlePress = () => {
        console.log("i like this Attractions")
    }

    return (
        <TouchableOpacity style={styles.iconContainer} onPress={handlePress}>
            <Image
                source={icons.notPressedFavoriteIcon}
                resizeMode='cover'
                style={styles.iconImg}
            />
        </TouchableOpacity>
    )
}

export default NotFavoriteIcon;