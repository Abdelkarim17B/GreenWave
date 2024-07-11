import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

// Define your navigation parameter types
type RootStackParamList = {
  FollowEnvironmentalImpact: undefined; // If FollowEnvironmentalImpact screen doesn't require any params
  // Add other screens here if needed
};

interface WelcomePageProps {}

const WelcomePage: React.FC<WelcomePageProps> = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>(); // Use the defined types

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/Unboarding.png')} style={styles.logo} />
      <Text style={styles.title}>Bienvenue sur GreenWave!</Text>
      <Text style={styles.subtitle}>
        Rejoignez-nous pour créer un avenir durable en participant à des initiatives écologiques locales.
      </Text>
      <Button title="Continuer" onPress={() => navigation.navigate('FollowEnvironmentalImpact')} />
    </View>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 32,
  },
});
