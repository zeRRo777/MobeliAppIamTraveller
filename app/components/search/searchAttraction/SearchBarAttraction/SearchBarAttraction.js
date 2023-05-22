import styles from "./SearchBarAttraction.style";
import {SearchBar} from "react-native-elements";
import {COLORS} from "../../../../../constants";



const SearchBarAttraction = ({searchValue, searchFunction}) => {
    return (
        <SearchBar
            placeholder="Search Attraction here ..."
            placeholderTextColor={COLORS.black}
            round
            value={searchValue}
            onChangeText={searchFunction}
            autoCorrect={false}
            containerStyle={[styles.searchBarContainerStyle]}
            inputContainerStyle={[styles.searchBarInputContainerStyle]}
            style={{color: COLORS.black}}
            searchIcon={{color: COLORS.black}}
        />
    )
}

export default SearchBarAttraction;