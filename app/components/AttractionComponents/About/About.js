import styles from "./about.style";
import {Text, View} from "react-native";


const About = () => {
    return(
        <View style={styles.MainTextContainer}>
            <Text style={styles.nameTextContainer}>Name Attraction</Text>
            <Text style={styles.descriptionTextContainer}>Description............////////////////////////////////////////////////////////////////////////////////////////////////////////</Text>
        </View>
    )
}

export default About;

