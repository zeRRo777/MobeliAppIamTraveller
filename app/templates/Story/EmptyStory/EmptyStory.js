import {Image, Text, View} from "react-native";
import styles from "./emptyStory.style";
import {images} from "../../../../constants";


const EmptyStory = () => {
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
                    <Text style={styles.textStyle}>Извините, но у вас еще ничего не добавлено в историю</Text>
                </View>
            </View>
        </View>
    )
}

export default EmptyStory;