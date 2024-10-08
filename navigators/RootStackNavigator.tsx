import { NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChoreScreen from '../screens/ChoreScreen';
import HomeScreen from '../screens/HomeScreen';
import StatisticsScreen from '../screens/StatisticsScreen';
import TabNavigator, { TabParamList } from './TabNavigator';

export type RootStackParamList = {
  Home: undefined;
  HouseholdNavigator: NavigatorScreenParams<TabParamList>;
  Chore: { id: string };
  Statistics: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  return (
    <RootStack.Navigator initialRouteName="Home">
      <RootStack.Screen name="Home" component={HomeScreen} />
      <RootStack.Screen
        name="HouseholdNavigator"
        component={TabNavigator}
        options={{ headerTitle: 'Household' }}
      />
      <RootStack.Screen name="Chore" component={ChoreScreen} />

      <RootStack.Screen name="Statistics" component={StatisticsScreen} />
    </RootStack.Navigator>
  );
}
