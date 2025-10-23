import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import UseStateScreen from '../screens/UseStateLab/UseStateScreen';
import UseEffectScreen from '../screens/UseEffectLab/UseEffectScreen';
import UseMemoScreen from '../screens/UseMemoLab/UseMemoScreen';

const Tab = createBottomTabNavigator();
 
export default function RootTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#0D0F14' },
          headerTintColor: '#E6E9EF',
          tabBarStyle: { backgroundColor: '#0D0F14', borderTopColor: '#1C2230' },
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: '#9AA4B2',
        }}
      >
        <Tab.Screen name="useState" component={UseStateScreen} />
        <Tab.Screen name="useEffect" component={UseEffectScreen} />
        <Tab.Screen name="useMemo" component={UseMemoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}