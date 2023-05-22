import styles from "./SearchBarCity.style";
import {SearchBar} from "react-native-elements";
import {COLORS} from "../../../../../constants";


const SearchBarCity = ({searchValue, searchFunction}) => {
    return (
        <SearchBar
            placeholder="Search City here ..."
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

export default SearchBarCity;