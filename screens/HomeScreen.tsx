import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../navigators/RootStackNavigator';
import { TabParamList } from '../navigators/TabNavigator';

type HomeProps = CompositeScreenProps<
  NativeStackScreenProps<RootStackParamList, 'Home'>,
  BottomTabScreenProps<TabParamList>
>;

export default function HomeScreen({ navigation }: HomeProps) {
  return (
    <View style={styles.container}>
      <View>
        <Text>CHOOSE YOUR HOUSEHOLD!</Text>
        <Button
          title="Go to Household"
          onPress={() =>
            navigation.navigate('HouseholdNavigator', { screen: 'Household' })
          }
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
