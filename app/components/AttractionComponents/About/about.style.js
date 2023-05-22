import {StyleSheet} from "react-native";
import {COLORS, SIZES} from "../../../../constants";

const styles = StyleSheet.create({
    MainTextContainer : {
        marginLeft:40,
        marginRight:40,
        marginBottom: 30
    },
    nameTextContainer : {
        color: COLORS.black,
        fontSize:SIZES.xxLarge,
        textAlign: 'center',
        marginBottom: 20
    },
    descriptionTextContainer : {
        color: COLORS.black,
        fontSize:SIZES.medium,
        textAlign: 'justify',
    },
})

export default styles;
