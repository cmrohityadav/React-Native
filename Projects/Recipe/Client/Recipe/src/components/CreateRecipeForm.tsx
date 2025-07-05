import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  useColorScheme,
} from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { Recipe } from '../context/RecipeContext';

interface CreateRecipeFormProps {
  onCancle: () => void;
  onSubmit: (recipe: Omit<Recipe, '_id' | 'createdBy' | 'createdAt'>) => Promise<void>;
}

const CreateRecipeForm: React.FC<CreateRecipeFormProps> = ({ onCancle, onSubmit }) => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [difficulty, setDifficulty] = useState<'Easy' | 'Medium' | 'Hard'>('Easy');

  const handleCreateRecipe = () => {
    if (title && description) {
      onSubmit({ title, description, difficulty });
    } else {
      Alert.alert('Please fill all fields');
    }
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? '#000' : '#fff' },
      ]}
    >
      <Text
        style={[
          styles.title,
          { color: isDarkMode ? '#fff' : '#000' },
        ]}
      >
        Create New Recipe
      </Text>

      <TextInput
        placeholder="Recipe title"
        style={[
          styles.input,
          {
            color: isDarkMode ? '#fff' : '#000',
            backgroundColor: isDarkMode ? '#222' : '#fff',
            borderColor: isDarkMode ? '#444' : '#ccc',
          },
        ]}
        placeholderTextColor={isDarkMode ? '#aaa' : '#666'}
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        placeholder="Recipe description"
        style={[
          styles.input,
          styles.textArea,
          {
            color: isDarkMode ? '#fff' : '#000',
            backgroundColor: isDarkMode ? '#222' : '#fff',
            borderColor: isDarkMode ? '#444' : '#ccc',
          },
        ]}
        placeholderTextColor={isDarkMode ? '#aaa' : '#666'}
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={5}
        textAlignVertical="top"
      />

      <View style={styles.pickerContainer}>
        <Text style={[styles.label, { color: isDarkMode ? '#fff' : '#000' }]}>
          Difficulty
        </Text>
        <Picker
          selectedValue={difficulty}
          onValueChange={(item) => setDifficulty(item as 'Easy' | 'Medium' | 'Hard')}
          style={[
            styles.picker,
            {
              color: isDarkMode ? '#fff' : '#000',
              backgroundColor: isDarkMode ? '#222' : '#fff',
            },
          ]}
          dropdownIconColor={isDarkMode ? '#fff' : '#000'}
        >
          <Picker.Item label="Easy" value="Easy" />
          <Picker.Item label="Medium" value="Medium" />
          <Picker.Item label="Hard" value="Hard" />
        </Picker>
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={[styles.btn, styles.cancelBtn]}
          onPress={onCancle}
        >
          <Text style={styles.btnText}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btn, styles.submitBtn]}
          onPress={handleCreateRecipe}
        >
          <Text style={[styles.btnText, { color: '#fff' }]}>Create Recipe</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  textArea: {
    height: 100,
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginRight: 8,
  },
  picker: {
    flex: 1,
    height: 50,
  },
  btnContainer: {
    paddingTop: 16,
    flexDirection: 'row',
  },
  btn: {
    flex: 1,
    padding: 16,
    borderRadius: 4,
    alignItems: 'center',
  },
  cancelBtn: {
    backgroundColor: '#ccc',
    marginRight: 8,
  },
  submitBtn: {
    backgroundColor: '#007aff',
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CreateRecipeForm;
