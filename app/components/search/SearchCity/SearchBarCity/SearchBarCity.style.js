import { StyleSheet } from "react-native";

import { COLORS } from "../../../../../constants"

const styles = StyleSheet.create({
    searchBarContainerStyle: {
        backgroundColor: COLORS.transparent,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        width: "91%",
        padding: 2,

    },
    searchBarInputContainerStyle: {
        backgroundColor: COLORS.lightWhite
    },
})

export default styles;