import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SingIn from "../screens/Singin";
import Home from "../screens/Home";
import Details from "../screens/Details";


const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes(){
    return(
        <Navigator screenOptions={{headerShown:false}}>
            <Screen name="Singin" component={SingIn}/>
            <Screen name="Home" component={Home}/>
            <Screen name="Details" component={Details}/>
        </Navigator>
    )
}