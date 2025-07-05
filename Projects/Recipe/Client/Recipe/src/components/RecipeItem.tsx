/* eslint-disable react-native/no-inline-styles */
import { View, Text, TouchableOpacity, StyleSheet, useColorScheme } from 'react-native';
import React from 'react';
import { Recipe } from '../context/RecipeContext';
interface RecipeItemProps {
  recipe: Recipe;
  onPressRecipeItem: () => void;
  currentUserId:string | null;
  onRecipeItemDelete: ()=> void;
}
const RecipeItem: React.FC<RecipeItemProps> = ({
  recipe,
  onPressRecipeItem,
  currentUserId,
  onRecipeItemDelete
}) => {

  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  return (
    <TouchableOpacity style={[
        styles.card,
        {
          backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff',
          shadowColor: isDarkMode ? '#fff' : '#000',
        },
      ]}
      onPress={onPressRecipeItem}
      >
      <View style={styles.cardContent}>
        <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>{recipe?.title}</Text>
        <Text style={[styles.description, { color: isDarkMode ? '#ccc' : '#666' }]} numberOfLines={2}>
          {recipe?.description}
        </Text>
        <Text  style={[styles.difficulty, { color: isDarkMode ? '#5ac8fa' : '#007aff' }]} numberOfLines={2}>
          {recipe?.difficulty}
        </Text>
      </View>

      {
        currentUserId && recipe.createdBy===currentUserId && <TouchableOpacity
        onPress={onRecipeItemDelete}
        style={[
            styles.deleteBtn,
            {
              backgroundColor: isDarkMode ? '#ff3b30' : '#333',
            },
          ]}>
        <Text style={styles.deleteBtnText}>Delete</Text>
      </TouchableOpacity>
      }
      
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  cardContent: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 15,
    color: '#666',
    marginBottom: 10,
  },
  difficulty: {
    fontSize: 12,
    color: '#007afd',
    fontWeight: 'bold',
  },
  deleteBtn: {
    position: 'absolute',
    top: 15,
    right: 10,
    backgroundColor: '#070706',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
  },
  deleteBtnText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
export default RecipeItem;
