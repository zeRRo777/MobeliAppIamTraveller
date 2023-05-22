import {View, Text} from "react-native";
import {COLORS} from "../../../constants";
import styles from "./favorites.style";
import SearchStoryAttraction from "../../components/search/searchStoryAttraction/SearchStoryAttraction";
import FavoritesData from "../../DATA/FavoritesData";


const Favorites = () => {


    return (
        <View style={styles.mainContainer}>
            <View style={styles.backgroundView}>
                <View style={styles.backgroundColorContainer}/>
                <SearchStoryAttraction DATA={FavoritesData} Header={'Избранное'}/>
            </View>
        </View>
    )
}

export default Favorites;