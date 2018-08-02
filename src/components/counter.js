import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpactiy
} from 'react-native';




export default class Counter extends Component {
constuctor(aa){
    super(aa);
    this.state={
        Count=10
    }
 this.increament=this.increament.bind(this);
 this.decreament=this.decreament.bind(this);
}
increament(){
    this.setState({Count:this.state.Count+1});

}
decreament(){
    this.setState({Count:this.state.Count-1});

}


    render() {
        return (
            <View style={styles.container }>
            <View>
                <Text>{this.state.Count}
                </Text>
                </View>

                <View>
                    <Button title='increased by 1++' onPress={this.increament}>
                    </Button>
                    </View>

                    <View>
                        <TouchableOpactiy onPress={this.decreament}>
                        <Text>
                            Decreased by 1-
                            </Text>
                            </TouchableOpactiy>
                            </View>
                            </View>
        );
    }
}

const styles=StyleSheet.create({container:{flex:1,backgroundColour:'#3498db',marginTop:22}});





               