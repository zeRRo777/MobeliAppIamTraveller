import {View} from "react-native";
import SearchCity from "../../components/search/SearchCity/SearchCity";
import CityData from "../../DATA/CityData";
import styles from "./cities.style";

const Cities = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.backgroundView}>
                <View style={styles.backgroundColorContainer}/>
                <SearchCity DATA={CityData}/>
            </View>
        </View>
    )
}

export default Cities;