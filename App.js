import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AppComp from "./components/App";
import MovieDetail from "./components/MovieComponents/MovieDetail";
import CustomNavigationBar from "./components/MovieComponents/AppBar"

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    header: CustomNavigationBar,
                }}>

                <Stack.Screen
                    name="home"
                    component={AppComp}


                />
                <Stack.Screen name="MovieDetail" component={MovieDetail} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;