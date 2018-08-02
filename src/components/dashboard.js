import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput
} from 'react-native';

export default class Dashboard extends Component {

     state={
    buttonPressed:false,
    color:'#009900'
  }

    // handleTextChange(word){
    //         this.setState({text:word});           
    

    render() {
        this.props.color
        return (
            <View style={ {flex:1, marginTop: 55} }>
               <Text style={this.state.buttonPressed?{fontSize:12,color:this.state.color}:{fontSize:24,color:this.state.color}}>
               I am Dashboard.
               </Text>
               <button onPress={() =>{
                   this.setState({buttonPressed:!this.state.buttonPressed,color:'#990000'});
               }} />
                </View>
        );
    }
}  
