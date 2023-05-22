import { StyleSheet } from "react-native";
import {COLORS, SIZES} from "../../../../constants";

const styles = StyleSheet.create({
    ImageStyle: {
        height: 180,
        borderRadius: 25,

    },
    imageBackgroundStyle : {
        borderRadius: 25
    },
    textContainer: {
        padding : 20,
        marginTop: 50
    },
    FirstTextStyle: {
        color: COLORS.lightWhite,
        fontSize: SIZES.xxLarge
    },
    SecondTexStyle: {
        color: COLORS.lightWhite,
        fontSize: SIZES.medium
    }
});

export default styles;