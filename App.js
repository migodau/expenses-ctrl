import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AllExpenses } from './screens/AllExpenses';
import { ManageExpenses } from './screens/ManageExpenses';
import { RecentExpenses } from './screens/RecentExpenses';
import { Ionicons } from '@expo/vector-icons';
import { THEME } from './theme';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const generalHeaderOptions = {
  headerStyle: {
    backgroundColor: THEME.COLORS.primary500,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontFamily: THEME.FONTS.bold,
  }
};

const ExpensesOverview = () => {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });
  
  if (!fontsLoaded) {
    return null;
  }

  return (
  <Tabs.Navigator 
  sceneContainerStyle={{backgroundColor: THEME.COLORS.gray100}}
  screenOptions={{ 
    ...generalHeaderOptions,
    tabBarStyle: {
      backgroundColor: THEME.COLORS.primary500,
    },
    tabBarActiveTintColor: THEME.COLORS.accent500,
    tabBarInactiveTintColor: THEME.COLORS.primary50,
    tabBarShowLabel: false,
  }}>
    <Tabs.Screen 
      name="RecentExpenses" 
      component={RecentExpenses} 
      options={{
        title: 'Recent Expenses',
        tabBarIcon: ({color, size}) => <Ionicons name="time-outline" size={size} color={color} />
      }}
    />
    <Tabs.Screen 
      name="AllExpenses" 
      component={AllExpenses} 
      options={{
        title: 'All Expenses',
        tabBarIcon: ({color, size}) => <Ionicons name="ios-list-outline" size={size} color={color} />
      }}
    />
  </Tabs.Navigator>);
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ ...generalHeaderOptions }}>
          <Stack.Screen 
            name="ExpensesOverview" 
            component={ExpensesOverview}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen 
            name="ManageExpenses" 
            component={ManageExpenses} 
            options={{
              title: 'Manage Expenses'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
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
