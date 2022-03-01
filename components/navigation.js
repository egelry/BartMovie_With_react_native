import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MovieList  from "./MovieComponents/MovieList";
import MovieDetail from "./MovieComponents/MovieDetail";

const Stack = createStackNavigator();

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    home="MovieList"
                    component={MovieList}
                />
                <Stack.Screen name="MovieDetail" component={MovieDetail} />

            </Stack.Navigator>
        </NavigationContainer>  
    )
}

export default MyStack