import React from "react";
import { Text, View } from "react-native";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { theme } from "@/constants";

const Layout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: theme.blue,
                        position: "absolute",
                        bottom: 40,
                        justifyContent: "center",
                        alignSelf: "center",
                        height: 65,
                        marginHorizontal: 16,
                        paddingHorizontal: 10,
                        borderRadius: 8,
                        // paddingVertical: 8,
                        // paddingBottom: 8,
                        // borderTopStartRadius: 12,
                        // borderTopEndRadius: 12,
                        borderWidth: 1,
                        borderTopWidth: 1,
                        borderColor: theme.blue,
                        borderTopColor: theme.blue,
                    },
                    tabBarShowLabel: true,
                    tabBarInactiveTintColor: theme.darkBlue,
                    tabBarActiveTintColor: theme.white,
                }}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        tabBarIcon: ({ color, size, focused }) => (
                            <View
                                style={{
                                    padding: 12,
                                    borderRadius: 20,
                                }}
                            >
                                <MaterialCommunityIcons name="home-outline" size={24} color={color} />
                            </View>
                        ),
                        tabBarLabel: ({ focused }) => (
                            <View className="-translate-y-3 ">
                                <Text style={{
                                    color: focused ? theme.white : theme.darkBlue,
                                    textTransform: 'capitalize'
                                }}>home</Text>
                            </View>
                        )
                    }}
                />
                <Tabs.Screen
                    name="text"
                    options={{
                        tabBarIcon: ({ color, size, focused }) => (
                            <View
                                style={{
                                    padding: 12,
                                    borderRadius: 20,
                                }}
                            >
                                <MaterialCommunityIcons name="text-recognition" size={24} color={color} />
                            </View>
                        ),
                        tabBarLabel: ({ children, focused }) => (
                            <View className="-translate-y-3 ">
                                <Text style={{
                                    color: focused ? theme.white : theme.darkBlue,
                                    textTransform: 'capitalize'
                                }}>{children}</Text>
                            </View>
                        )
                    }}
                />
                <Tabs.Screen
                    name="voice"
                    options={{
                        tabBarIcon: ({ color, size, focused }) => (
                            <View
                                style={{
                                    padding: 12,
                                    borderRadius: 10,
                                }}
                            >
                                <MaterialIcons name="multitrack-audio" size={24} color={color} />
                            </View>
                        ),
                        tabBarLabel: ({ focused, children }) => (
                            <View className="-translate-y-3 ">
                                <Text style={{
                                    color: focused ? theme.white : theme.darkBlue,
                                    textTransform: 'capitalize'
                                }}>{children}</Text>
                            </View>
                        )
                    }}
                />
                <Tabs.Screen
                    name="capture"
                    options={{
                        tabBarIcon: ({ color, size, focused }) => (
                            <View
                                style={{
                                    padding: 12,
                                    borderRadius: 10,
                                }}
                            >
                                <MaterialCommunityIcons name="camera-outline" size={24} color={color} />
                            </View>
                        ),
                        tabBarLabel: ({ children, focused }) => (
                            <View className="-translate-y-3 ">
                                <Text style={{
                                    color: focused ? theme.white : theme.darkBlue,
                                    textTransform: 'capitalize'
                                }}>{children}</Text>
                            </View>
                        )
                    }}
                />
            </Tabs>
            <StatusBar style="dark" />
        </>
    );
};

export default Layout;
