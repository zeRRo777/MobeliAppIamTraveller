import {View, KeyboardAvoidingView} from "react-native";
import styles from "./mainAtraction.style";
import SearchAttraction from "../../components/search/searchAttraction/SearchAttraction";
import AttractionMoscowData from "../../DATA/AttractionMoscowData";



const Attractions = () => {


    return (
        <View style={styles.mainContainer}>
            <View style={styles.backgroundView}>
                <View style={styles.backgroundColorContainer}/>
                <SearchAttraction DATA={AttractionMoscowData}/>
            </View>
        </View>

    )

}

export default Attractions;

