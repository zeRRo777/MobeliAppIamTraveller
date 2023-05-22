import styles from "../../Story/EmptyStory/emptyStory.style";
import {Image, Text, View} from "react-native";
import {images} from "../../../../constants";


const EmptyFavorites = () => {

    return (
        <View style={styles.mainContainer}>
            <View style={styles.backgroundView}>
                <View style={styles.imageContainer}>
                    <Image
                        source={images.notStory}
                        style={styles.imageStyle}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textStyle}>Извините, но у вас еще ничего не добавлено в избранное</Text>
                </View>
            </View>
        </View>
    )
}

export default EmptyFavorites;