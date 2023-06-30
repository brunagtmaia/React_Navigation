import { View, Text, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home(){
    const navigation = useNavigation();

    const goToHome = () => {
        navigation.navigate('Details');
    }
    return(
        <View style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
            
            <Text>Home</Text>
            <TouchableOpacity 
                onPress={goToHome}
                style={{top:20, width: 200, backgroundColor:"#43425D", alignItems:'center', padding:8, borderRadius:8}}>
                <Text style={{color: "#FFF"}}>Ir para Detalhes</Text>
            </TouchableOpacity>
        </View>
    )
};