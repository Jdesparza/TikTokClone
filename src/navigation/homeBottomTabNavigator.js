import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

import LinearGradient from 'react-native-linear-gradient';
import Search from '../screens/Search';
import Inbox from '../screens/Inbox';
import Profile from '../screens/Profile';
import AddShort from '../screens/AddShort';


const Tab = createBottomTabNavigator()

const HomeBottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: '#000',
                height: 49
            },
            tabBarActiveTintColor: '#fff',
            tabBarShowLabel: false,
        }}>
            <Tab.Screen name={'Home'} component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <View style={styles.viewIcon}>
                            <Entypo name='home' size={25} color={color} />
                            <Text style={styles.textIcon(color)}>Home</Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen name={'Search'} component={Search}
                options={{
                    tabBarIcon: ({ color }) => (
                        <View style={styles.viewIcon}>
                            <AntDesign name='search1' size={25} color={color} />
                            <Text style={styles.textIcon(color)}>Search</Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen name={'Upload'} component={AddShort}
                options={{
                    tabBarIcon: ({ color }) => (
                        <View>
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#21D5EC', '#FB2D6C']} style={styles.linearGradient}>
                                <View style={styles.containerIconUploadWhite}>
                                    <Entypo name='plus' size={20} color={'black'} />
                                </View>
                            </LinearGradient>
                        </View>
                    )
                }}
            />
            <Tab.Screen name={'Inbox'} component={Inbox}
                options={{
                    tabBarIcon: ({ color }) => (
                        <View style={styles.viewIcon}>
                            <MaterialCommunityIcons name='message-minus-outline' size={25} color={color} />
                            <Text style={styles.textIcon(color)}>Inbox</Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen name={'Profile'} component={Profile}
                options={{
                    tabBarIcon: ({ color }) => (
                        <View style={styles.viewIcon}>
                            <Ionicons name='person-outline' size={25} color={color} />
                            <Text style={styles.textIcon(color)}>Profile</Text>
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    viewIcon: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textIcon: (color) => ({
        color,
        fontSize: 11,
        fontWeight: '500'
    }),
    linearGradient: {
        width: 45,
        height: 28,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        top: -4
    },
    containerIconUploadWhite: {
        backgroundColor: 'white',
        width: 38,
        height: 28,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default HomeBottomTabNavigator