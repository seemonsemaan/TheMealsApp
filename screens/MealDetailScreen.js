import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { Ionicons } from '@expo/vector-icons';

const MealDetailScreen = props => {
    const meal = MEALS.find(m => m.id === props.route.params.mealId);
    props.navigation.setOptions({
        headerTitle: meal.title,
        headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Favorite' iconName="ios-star" onPress={() => {
                console.log('mark 2');
            }} />
        </HeaderButtons>)
    });
    return (
        <View style={styles.screen}>
            <Text>{meal.title}</Text>
            <Ionicons name="ios-star" size={32} color="black" />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default MealDetailScreen;