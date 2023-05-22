import styles from "./review.style";
import {Text, TextInput, View} from "react-native";
import {Button} from "@rneui/themed";
import {COLORS} from "../../../../constants";
import {useState} from "react";


const Review = () => {

    const [comment, onChangeComment] = useState('')

    return (
        <View style={styles.reviewsContainer}>
            <Text style={styles.reviewTextContainer}>Отзывы</Text>
            <View style={styles.personReviewContainer}>
                <View style={styles.personReviewTextContainer}>
                    <Text style={styles.profileNameTextContainer}>Name Profile</Text>
                    <Text style={styles.reviewPersonTextContainer}>Сам отзыв................</Text>
                </View>
                <View style={styles.personReviewTextContainer}>
                    <Text style={styles.profileNameTextContainer}>Name Profile</Text>
                    <Text style={styles.reviewPersonTextContainer}>Сам отзыв................</Text>
                </View>
                <View style={styles.personReviewTextContainer}>
                    <Text style={styles.profileNameTextContainer}>Name Profile</Text>
                    <Text style={styles.reviewPersonTextContainer}>Сам отзыв................</Text>
                </View>
            </View>
            <View style={styles.writeReviewContainer}>
                <TextInput
                    onChangeText={text => onChangeComment(text)}
                    value={comment}
                    numberOfLines={4}
                    multiline
                    placeholder={'Здесь вы можете оставить комментарий...'}
                    style={styles.textInputStyle}
                />
                <Button
                    title={'Write Comment!'}
                    containerStyle={styles.buttonWriteContainer}
                    titleStyle={styles.buttonWriteTitleStyle}
                    buttonStyle={styles.buttonWriteStyle}
                    color = {COLORS.lightWhite}
                />
            </View>
        </View>
    )
}

export default Review;