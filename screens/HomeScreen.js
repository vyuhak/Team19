// HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const navigateToSkillShareScreen = () => {
    navigation.navigate('SkillShareScreen'); // Update the screen name to 'SkillShareScreen'
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Screen!</Text>
      <Text style={styles.description}>
        Ready to share your skills and learn from others? Tap below to enter the Skill Share
        section!
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Enter Skill Share" onPress={navigateToSkillShareScreen} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#63a4ff', // Background color (light blue)
    paddingHorizontal: 20, // Add horizontal padding
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#fff', // Title text color (white)
    textAlign: 'center', // Center align the title
  },
  description: {
    fontSize: 16,
    marginBottom: 30,
    color: '#fff', // Description text color (white)
    textAlign: 'center', // Center align the description
  },
  buttonContainer: {
    marginTop: 10,
    width: '80%', // Set button width to 80% of the screen
  },
});

export default HomeScreen;
