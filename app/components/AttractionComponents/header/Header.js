import {View} from "react-native";
import {FlatListSlider} from "react-native-flatlist-slider";
import styles from "./header.style";
import BackBtn from "../../common/header/BackButton";


const Header = () => {

    const images = [
        {
            image: require('../../../../assets/images/attractions/MoscowKremal1.jpg'),
        },
        {
            image: require('../../../../assets/images/attractions/MoscowKremal2.jpg'),
        },
        {
            image: require('../../../../assets/images/attractions/MoscowKremal3.jpg'),
        }
    ]

    const handlePressSlider = () => {}

    return (
        <View>
            <FlatListSlider
                data={images}
                local
                autoscroll={false}
                onPress={handlePressSlider}
                indicatorContainerStyle={{marginBottom: 20}}
            />
            <View style={styles.backButtonContainer}>
                <BackBtn/>
            </View>
        </View>
    )
}

export default Header;