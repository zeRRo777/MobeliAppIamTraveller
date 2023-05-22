import { StyleSheet } from "react-native";
import {COLORS, SIZES} from "../../../../../constants";

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
    },
    mainContainer: {
        backgroundColor: COLORS.darkWhite,
        borderRadius: 25
    },
    previewContainer : {
        marginLeft: 25,
        marginTop: 10,
        marginBottom: 10,
        marginRight: 20
    },
    previewStyle: {
        color: COLORS.black,
        fontSize: SIZES.medium
    },
    favoriteContainer : {
        position: 'absolute',
        right: 15,
        top: 10

    }

});

export default styles;