import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { AuthProvider } from "./src/context/AuthContext"

import HomeScreen from "./src/screens/UserScreens/HomeScreen"
import LoginScreen from "./src/screens/AuthScreens/LoginScreen"

const Stack = createNativeStackNavigator()

const App = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='LoginScreen' component={LoginScreen} />
      <Stack.Screen name='Home' component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default () => {
  return <AuthProvider>
    <App />
  </AuthProvider>
}