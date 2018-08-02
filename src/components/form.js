import React, {Component} from 'react';
import{
    View,
    StyleSheet,
    Button,
    Text,
    TextInput

} from 'react-native';

export default class form extends Component{

    State={
        first_name:'',
        last_name:'',
        address:'',
        mNumber:'',
        buttonClicked:false
    }
        handleTextChange(arg,key){
            this.setState({
                [key]:arg
            });
        }
        render(){
            return(
                <View>
                      <View>
                          <Text>FirstName</Text>
                          <TextInput onChange Text={(name)=>{this.handleTextChange(name,"First_name")}}/>

                          <Text>LastName</Text>
                          <TextInput onChange Text={(name)=>{this.handleTextChange(name,"last_name")}}/>
                          
                          <Text>Address</Text>
                          <TextInput onChange Text={(name)=>{this.handleTextChange(name,"address")}}/>
                          
                          <Text>MobileNumber</Text>
                          <TextInput onChange Text={(name)=>{this.handleTextChange(name,"mnumber")}}/>
                          
                          <Button onPress={()=>{
                              this.setState({
                                  buttonClicked:true
                              });

                          }} title='Click Me'/>
                          </View>
                          {
                              this.state.buttonClicked?
                              (
                                  <View>
                                      <Text>
                                          {this.state.First_name}
                                          </Text>

                                          <Text>
                                          {this.state.last_name}
                                          </Text>
                                          
                                          <Text>
                                          {this.state.address}
                                          </Text>
                                          
                                          <Text>
                                          {this.state.mNumber}
                                          </Text>
                                          </View>):null
                                        }

                                        </View>


                              );
                            }
                          }
     