import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

const MealsNavigator = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="Categories">
                <Stack.Screen
                    name="Categories"
                    component={CategoriesScreen}
                />
                <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
                <Stack.Screen name="MealDetail" component={MealDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        if (route.name === 'Meals') {
                            return (
                                <Ionicons
                                    name='ios-restaurant'
                                    size={size}
                                    color={color}
                                />
                            );
                        } else if (route.name === 'Favorites') {
                            return (
                                <Ionicons
                                    name='ios-star'
                                    size={size}
                                    color={color}
                                />
                            );
                        }
                    },
                })}
                tabBarOptions={{
                    activeTintColor: Colors.accentColor
                }}>
                <Tab.Screen name="Meals" component={MealsNavigator} />
                <Tab.Screen name="Favorites" component={FavoritesScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default TabNavigator;