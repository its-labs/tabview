import React, { Component } from 'react';
import { TabNavigator, TabBarTop } from "react-navigation";
import { Today } from '../srceens/Today';
import {
    Platform, StyleSheet, Text, Picker, View, Image, Button, Alert,
    I18nManager, AsyncStorage
} from 'react-native';
import { Tomorrow } from '../srceens/Tomorrow';
import { PickDate } from '../srceens/PickDate';

export const MainScreenNavigator = TabNavigator({
    Today: { screen: Today },
    Tomorrow: { screen: Tomorrow },
    PickDate: { screen: PickDate }
},
    {
        tabBarPosition: 'top',
        animationEnabled: true,
        swipeEnabled: true,
        tabBarComponent: TabBarTop,
        initialLayout: {
            width: 50,
            height: 50
        },
        tabBarOptions: {
            activeTintColor: '#dac328',
            labelStyle: {
                fontSize: 10,
            },
            style: {
                backgroundColor: '#262729',
                marginTop:20
            },

        },
        // navigationOptions: ({ navigation }) => ({
        //     tabBarOnPress: (jumpToIndex) => {
        //         if (jumpToIndex.scene.index == 1) {
        //             Alert.alert(" tabBarOnPress" + jumpToIndex.scene.index)
        //         }
        //     },
        // }),
    });