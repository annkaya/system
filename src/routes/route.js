import React, {Component} from 'react';
import {
    TouchableOpacity,
    View,
    Text
} from 'react-native';
import {Router,Scene, Actions} from 'react-native-router-flux';
import HomePage from './components';
import Next from './components/next';
import Dashboard from './components/dashboard';


//
//props : 1. Object
        //2. String/ Number/ Boolean
        //3. function

export default () => 
        <Router>
            <Scene key="root">
                <Scene drawer contentComponent={
                    () =>
                    <View>
                        <TouchableOpacity onPress={() => {
                            Actions.home();
                        }}>
                            <Text>
                                Home
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            Actions.next();
                        }}>
                        <Text>
                            Settings
                        </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            Actions.dashboard();
                        }}>
                        <Text>
                            Sign Out
                        </Text>
                        </TouchableOpacity>
                    </View>
                    }
                  drawerPosition="left">
                    <Scene component={HomePage} initial key="home"/>
                    <Scene component={Next} key="next" />
                    <Scene component={Dashboard} key="dashboard" />
                </Scene>
               
            </Scene>
        </Router>


