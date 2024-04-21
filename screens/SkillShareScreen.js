// SkillShareScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const SkillShareScreen = () => {
  const [isAddingSkill, setIsAddingSkill] = useState(false);
  const [userName, setUserName] = useState('');
  const [userSkill, setUserSkill] = useState('');
  const [description, setDescription] = useState('');
  const [contactDetails, setContactDetails] = useState('');
  const [skills, setSkills] = useState([
    { user: 'John', skill: 'React Native Development', description: 'Experienced in building mobile apps with React Native.', contact: 'john@example.com' },
    { user: 'Alice', skill: 'JavaScript', description: 'Proficient in frontend and backend development with JavaScript.', contact: 'alice@example.com' },
    { user: 'Bob', skill: 'Python', description: 'Skilled in developing web applications and data analysis with Python.', contact: 'bob@example.com' },
  ]);

  const handleAddSkill = () => {
    if (userName && userSkill && description && contactDetails) {
      // Add the new skill to the skills array
      setSkills(prevSkills => [...prevSkills, { user: userName, skill: userSkill, description, contact: contactDetails }]);
      // Clear input fields after adding the skill
      setUserName('');
      setUserSkill('');
      setDescription('');
      setContactDetails('');
      // Hide the "Add Your Skill" section after adding the skill
      setIsAddingSkill(false);
    }
  };

  const renderAddSkill = () => {
    if (isAddingSkill) {
      return (
        <View style={styles.addSkillContainer}>
          <Text style={styles.subtitle}>Add Your Skill:</Text>
          <TextInput
            style={styles.input}
            placeholder="Your Name"
            value={userName}
            onChangeText={setUserName}
          />
          <TextInput
            style={styles.input}
            placeholder="Your Skill"
            value={userSkill}
            onChangeText={setUserSkill}
          />
          <TextInput
            style={styles.input}
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
            multiline
          />
          <TextInput
            style={styles.input}
            placeholder="Contact Details"
            value={contactDetails}
            onChangeText={setContactDetails}
          />
          <Button title="Add Skill" onPress={handleAddSkill} color="#3CB371" />
        </View>
      );
    } else {
      return (
        <Button title="Add Your Skill" onPress={() => setIsAddingSkill(true)} color="#3CB371" />
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Skill Share</Text>
      <ScrollView style={styles.skillsContainer}>
        {skills.map((item, index) => (
          <View key={index} style={styles.skillItem}>
            <Text style={styles.skillTitle}>{item.skill}</Text>
            <Text style={styles.skillDescription}>{item.description}</Text>
            <Text>Contact: {item.contact}</Text>
            <Text style={styles.skillUser}>Shared by: {item.user}</Text>
          </View>
        ))}
      </ScrollView>
      {renderAddSkill()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ADD8E6', // Light blue background color
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // Dark gray text color
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333', // Dark gray text color
  },
  skillsContainer: {
    flex: 1,
    marginBottom: 20,
  },
  skillItem: {
    marginBottom: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF', // White background color for skill items
  },
  skillTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333', // Dark gray text color
  },
  skillDescription: {
    marginBottom: 10,
    color: '#666', // Gray text color
  },
  skillUser: {
    marginTop: 10,
    fontStyle: 'italic',
    color: '#666', // Gray text color
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff', // White background color
  },
  addSkillContainer: {
    backgroundColor: '#F0FFFF', // Light cyan background color for the "Add Skill" section
    borderRadius: 10,
    padding: 20,
  },
});

export default SkillShareScreen;
