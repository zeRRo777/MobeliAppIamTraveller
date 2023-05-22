import {View, FlatList, Text, ScrollView} from "react-native";
import {Component} from "react";
import styles from "./searchAttraction.style";
import CardAttraction from "../../AttractionsComponents/CardAttraction/CardAttraction";
import BackButton from "../../common/header/BackButton";
import SearchBarAttraction from "./SearchBarAttraction/SearchBarAttraction";


const renderCard = ({item}) => (
    <CardAttraction
        image={item.image}
        city={item.city}
        name={item.name}
        id={item.id}
        preview={item.preview}
        direction='Attraction'
    />
)

class SearchAttraction extends Component {
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
            const item_data = `${item.name.toUpperCase()}`
            const text_data = text.toUpperCase();
            return item_data.indexOf(text_data) > -1;
        });
        this.setState({data: updatedData, searchValue: text});
    }

    renderHeader = () => {
        return (
            <View>
                <View style={styles.headerContainer}>
                    <View style={styles.backButtonContainer}>
                        <BackButton/>
                    </View>
                    <SearchBarAttraction
                        searchValue={this.state.searchValue}
                        searchFunction={(text) => this.searchFunction(text)}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textCountry}>Country</Text>
                    <Text style={styles.textCity}>City</Text>
                    <Text style={styles.textAttractions}>Attractions</Text>
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
                    style={{flex: 1}}
                    renderItem={renderCard}
                    keyExtractor={(item) => item.id}
                />
            </View>
        )
    }
}

export default SearchAttraction;
