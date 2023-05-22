import { StyleSheet } from "react-native";

import {COLORS, SIZES} from "../../../../constants"

const styles = StyleSheet.create({
    backgroundColorContainer : {
        backgroundColor: COLORS.beige,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '50%'
    },
    searchBarContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40,
        marginTop: 60
    },
    textContainer: {
        marginBottom: 30
    },
    textStyle: {
        textAlign: 'center',
        fontSize: SIZES.xxLarge,
        color: COLORS.black,
        fontWeight: 'bold'
    }
})

export default styles;