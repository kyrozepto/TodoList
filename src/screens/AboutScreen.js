import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AboutScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>About</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/todolist-icon.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.description}>
            Simple task management to organize your day-to-day tasks.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contributors</Text>
          <Text style={styles.contributor}>• Bahiskara Ananda Arryanto (22081010181)</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact</Text>
          <Text style={styles.contact}>Email: 22081010181@student.upnjatim.ac.id</Text>
          <Text style={styles.contact}>Website: www.github.com/kyrozepto</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    marginBottom: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: '#666',
    fontFamily: 'SequelSans-Medium',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'SequelSans-Bold',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  version: {
    fontSize: 16,
    color: '#666',
    fontFamily: 'SequelSans-Medium',
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
    fontFamily: 'SequelSans-Bold',
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    fontFamily: 'SequelSans-Medium',
  },
  contributor: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
    fontFamily: 'SequelSans-Medium',
  },
  contact: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
    fontFamily: 'SequelSans-Medium',
  },
});

export default AboutScreen;