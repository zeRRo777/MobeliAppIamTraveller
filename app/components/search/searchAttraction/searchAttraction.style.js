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
    headerContainer : {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        flexDirection: 'row',
        marginTop: 60,
    },
    backButtonContainer : {
        marginRight: 20,
    },
    textContainer : {
        marginLeft: 30,
        marginBottom:30
    },
    textCountry : {
        color: COLORS.black,
        fontSize: SIZES.medium
    },
    textCity : {
        color: COLORS.black,
        fontSize: SIZES.xxLarge,
        fontWeight: 'bold',
        marginBottom: 20
    },
    textAttractions : {
        textAlign: 'center',
        color: COLORS.black,
        fontSize: SIZES.xLarge,
    }
})

export default styles;