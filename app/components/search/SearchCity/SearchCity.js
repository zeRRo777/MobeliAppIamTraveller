import {View, FlatList, Text} from "react-native";
import {Component} from "react";
import styles from "./searchCity.style";
import CardCity from "../../CardCity/CardCity";
import SearchBarCity from "./SearchBarCity/SearchBarCity";

const renderCard = ({item}) => (
    <CardCity
        image={item.image}
        city={item.City}
        country={item.Country}
        id={item.id}
        direction='Attractions'
    />
)

class SearchCity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: props.DATA,
            error: null,
            searchValue: "",
        };
        this.arrayholder = this.state.data
    }


    searchFunction = (text) => {
        const updatedData = this.arrayholder.filter((item) =>{
            const item_data = `${item.City.toUpperCase()}`
            const text_data = text.toUpperCase();
            return item_data.indexOf(text_data) > -1;
        });
        this.setState({data: updatedData, searchValue: text});
    }

    renderHeader = () => {
        return (
            <View>
                <View style={styles.backgroundColorContainer}/>
                <View style={styles.searchBarContainer}>
                    <SearchBarCity
                        searchValue={this.state.searchValue}
                        searchFunction={(text) => this.searchFunction(text)}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textStyle}>Cities</Text>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={{flex: 1}}>
                {this.renderHeader()}
                <FlatList
                    data={this.state.data}
                    style={{flex: 1, marginBottom: 20}}
                    renderItem={renderCard}
                    keyExtractor={(item) => item.id}
                />
            </View>
        )
    }
}

export default SearchCity;
