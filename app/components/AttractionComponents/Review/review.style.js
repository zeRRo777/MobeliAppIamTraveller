import {StyleSheet} from "react-native";
import {COLORS, SIZES} from "../../../../constants";

const styles = StyleSheet.create({
    reviewsContainer : {
        backgroundColor: COLORS.beige,
        marginBottom: 10
    },
    reviewTextContainer : {
        marginLeft: 40,
        marginTop: 5,
        color: COLORS.black,
        fontSize:SIZES.xxLarge,
        marginBottom:10
    },
    personReviewContainer : {
        marginLeft: 40,
        marginRight: 20,
        textAlign: 'justify',
        marginBottom:30
    },
    personReviewTextContainer : {
        marginBottom: 20,
    },
    profileNameTextContainer : {
        color: COLORS.black,
        fontSize:SIZES.large,
        marginBottom: 10
    },
    reviewPersonTextContainer: {
        color:COLORS.black,
        fontSize: SIZES.medium
    },
    writeReviewContainer : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        paddingHorizontal: 20
    },
    buttonWriteContainer : {
        marginLeft:0,
    },
    buttonWriteStyle: {
        width: 150,
        borderRadius:30,
    },
    buttonWriteTitleStyle: {
        color: COLORS.black,
        fontSize:SIZES.medium
    },
    textInputStyle: {
        height: 100,
        borderColor: COLORS.black,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 20,
        width: '80%'
    },
})

export default styles;
