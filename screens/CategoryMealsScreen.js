import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import { FlatList } from 'react-native-gesture-handler';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = props => {
    const renderMealItem = itemData => {
        return (
            <MealItem title={itemData.item.title} onSelectMeal={() => {
                props.navigation.navigate('MealDetail', {
                    mealId: itemData.item.id
                });
            }}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                image={itemData.item.imageUrl}
            />
        );
    }

    const catId = props.route.params.categoryId;
    const title = CATEGORIES.find(cat => cat.id === catId).title;
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)
    props.navigation.setOptions({ title: title })
    return (
        <View style={styles.screen}>
            <FlatList data={displayedMeals} renderItem={renderMealItem}
                style={{ width: '100%' }}></FlatList>
        </View>
    );
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});

export default CategoryMealsScreen;