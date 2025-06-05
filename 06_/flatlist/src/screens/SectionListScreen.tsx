import {SectionList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SECTION_DATA = [
  {
    title: 'Men',
    data: ['Kurta', 'T-shirt', 'Set wet gel'],
  },
  {
    title: 'Women',
    data: ['Kurti', 'T-shirt', 'Jhumke'],
  },
];

const SectionListScreen: React.FC = () => {
  const handleRenderItems = ({item}: {item: string}) => (
    <View style={styles.renderItem}>
      <Text style={styles.renderItemText}>{item}</Text>
    </View>
  );
  const handleSectionHeader = ({
    section: {title},
  }: {
    section: {title: string};
  }) => (
    <View style={styles.renderHeader}>
      <Text style={styles.renderHeaderText} >{title}</Text>
    </View>
  );
  return (
    <View>
      <Text>Section List Screen</Text>
      <SectionList
        sections={SECTION_DATA}
        renderItem={handleRenderItems}
        renderSectionHeader={handleSectionHeader}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
};

export default SectionListScreen;

const styles = StyleSheet.create({
    renderHeader:{
        paddingVertical:8,
        borderColor:'#a21c434',
        borderWidth:2,
        marginHorizontal:5,
        paddingHorizontal:5,
    },
    renderHeaderText:{
        fontWeight:'bold',
        color:'red',
    },
    renderItem:{
        paddingVertical:2,
        marginHorizontal:5,
        paddingHorizontal:5,
    },
    renderItemText:{
        fontWeight:'500',
        color:'blue',
    },
});
