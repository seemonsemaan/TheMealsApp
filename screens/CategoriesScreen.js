import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = props => {
    const renderGridItem = itemData => {
        return (
            <CategoryGridTile title={itemData.item.title} onSelect={()=>{
                props.navigation.navigate('CategoryMeals', {
                    categoryId: itemData.item.id
                });
            }}
            color={itemData.item.color}
            style={styles.gridItem} />
        );
    };

    return (
        <View style={styles.screen}>
            <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    gridItem:{
        flex: 1,
        // width: '40%'
    }
});

export default CategoriesScreen;