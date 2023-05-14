import { StyleSheet } from "react-native";

import { COLORS } from "../../../constants"

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        padding: 2,
    },
    searchBarContainerStyle: {
        backgroundColor: COLORS.transparent,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        width: "94%",

    },
    searchBarInputContainerStyle: {
        backgroundColor: COLORS.beige
    },
    searchBarContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
})

export default styles;