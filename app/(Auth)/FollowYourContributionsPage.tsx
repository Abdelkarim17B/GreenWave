// Define your navigation parameter types
type RootStackParamList = {
    Home: undefined; // If Home screen doesn't require any params
    // Add other screens here if needed
  };
  
  import React from 'react';
  import { View, Text, Image, Button, StyleSheet } from 'react-native';
  import { useNavigation, NavigationProp } from '@react-navigation/native';
  
  // Update the interface to include navigation types
  interface FollowYourContributionsPageProps {}
  
  const FollowYourContributionsPage: React.FC<FollowYourContributionsPageProps> = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>(); // Use the defined types
  
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/images/Unboarding.png')} style={styles.logo} />
        <Text style={styles.title}>Suivez Vos Contributions</Text>
        <Text style={styles.subtitle}>Gardez une trace de vos activités écologiques et voyez l'impact.</Text>
        <Button title="Continuer" onPress={() => navigation.navigate('Home')} />
      </View>
    );
  };
  
  export default FollowYourContributionsPage;
  
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
  