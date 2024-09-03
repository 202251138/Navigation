import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screen/Homescreen';
import SignIn from './src/screen/Signin';
import SignUp from './src/screen/Signup';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Home'>
      <Stack.Screen name = "" component = {HomeScreen} option = {{headerShown: false}}/>
      <Stack.Screen name = "SignIn" component = {SignIn} options = {{ headerTitle: '', headerTintColor: 'rgb(252,90,102)'}}/>
      <Stack.Screen name = "SignUp" component = {SignUp} options = {{ headerTitle: '', headerTintColor: 'rgb(252,90,102)'}}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}