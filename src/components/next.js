import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput
} from 'react-native';

export default class Next extends Component {
    state={
        text:''
    }

    handleTextChange(word){
            this.setState({text:word});           
    }

    render() {
        return (
            <View style={ {flex:1, marginTop: 55} }>
                <Text>{this.state.text}</Text>
                <TextInput 
                    onChangeText={this.handleTextChange}
                    
                    />
                </View>
        );
    }
}  
