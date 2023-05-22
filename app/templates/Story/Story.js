import {View} from "react-native";
import styles from "./story.style";
import AttractionStoryData from "../../DATA/AttractionStoryData";
import SearchStoryAttraction from "../../components/search/searchStoryAttraction/SearchStoryAttraction";

const Story = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.backgroundView}>
                <View style={styles.backgroundColorContainer}/>
                <SearchStoryAttraction DATA={AttractionStoryData} Header={'Ваша история'}/>
            </View>
        </View>
    )
}

export default Story;