import { StyleSheet } from "react-native";

import {COLORS, SIZES} from "../../../../../constants"

const styles = StyleSheet.create({
    searchBarContainerStyle: {
        backgroundColor: COLORS.transparent,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        width: "75%",
        padding: 2,

    },
    searchBarInputContainerStyle: {
        backgroundColor: COLORS.lightWhite,
    },
})

export default styles;