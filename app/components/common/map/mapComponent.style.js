import {StyleSheet} from "react-native";
import {COLORS, SIZES} from "../../../../constants";

const styles = StyleSheet.create({
    mainContainer : {
        marginBottom: 30,
        paddingHorizontal:20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer : {
        marginBottom: 20,
    },
    textStyle: {
        color: COLORS.black,
        fontSize: SIZES.xLarge,
        textAlign: 'center',
    },
    map: {
        width: 300,
        height: 300
    }
})

export default styles;