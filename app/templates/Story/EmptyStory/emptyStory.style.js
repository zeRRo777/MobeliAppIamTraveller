import {Dimensions, StyleSheet} from "react-native";

import {COLORS, SIZES} from "../../../../constants"

const styles = StyleSheet.create({
    mainContainer : {
        flex: 1,
        minHeight: Math.round(Dimensions.get('window').height),

    },
    backgroundView: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.lightWhite,
    },
    imageStyle: {
        width: 300,
        height: 200,
    },
    imageContainer: {
        alignSelf: 'center',
        marginTop:80,
        marginBottom: 30
    },
    textContainer : {
        marginHorizontal: 30,
    },
    textStyle: {
        color: COLORS.red,
        fontSize: SIZES.large,
        textAlign: 'center'
    }
})

export default styles;