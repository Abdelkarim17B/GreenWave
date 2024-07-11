import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

// Define your navigation parameter types
type RootStackParamList = {
  FollowYourContributions: undefined; // If FollowYourContributions screen doesn't require any params
  // Add other screens here if needed
};

interface FollowEnvironmentalImpactPageProps {}

const FollowEnvironmentalImpactPage: React.FC<FollowEnvironmentalImpactPageProps> = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>(); // Use the defined types

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/Unboarding.png')} style={styles.logo} />
      <Text style={styles.title}>Suivez l'Impact Environnemental</Text>
      <Text style={styles.subtitle}>
        Surveillez l'air, l'eau, l'énergie et les déchets avec des capteurs intelligents. Voyez votre impact.
      </Text>
      <Button title="Continuer" onPress={() => navigation.navigate('FollowYourContributions')} />
    </View>
  );
};

export default FollowEnvironmentalImpactPage;

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
