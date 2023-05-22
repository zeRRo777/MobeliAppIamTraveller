import {Dimensions, StyleSheet} from "react-native";

import {COLORS} from "../../../constants"

const styles = StyleSheet.create({
    mainContainer : {
        flex: 1,
        minHeight: Math.round(Dimensions.get('window').height)
    },
    backgroundView: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.lightWhite,
    },
    backgroundColorContainer : {
        backgroundColor: COLORS.beige,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '50%'
    },
})

export default styles;