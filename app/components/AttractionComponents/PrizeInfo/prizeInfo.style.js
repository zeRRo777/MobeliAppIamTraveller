import {StyleSheet} from "react-native";
import {COLORS, SIZES} from "../../../../constants";

const styles = StyleSheet.create({
    infoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        paddingHorizontal: 20
    },
    textInfo: {
        marginHorizontal: 20,
        color: COLORS.black,
        fontSize:SIZES.large,
        textAlign: 'justify',
        marginBottom: 10,
    },
    buttonCheckTitleStyle: {
        color: COLORS.lightWhite,
        fontSize:SIZES.medium
    },
    buttonWriteStyle: {
        width: 150,
        borderRadius:30,
    },
    buttonWriteContainer : {
        marginLeft:0,
    }
})

export default styles;
