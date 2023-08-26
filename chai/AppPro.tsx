import React from "react";

import {View,
Text,
StyleSheet,
useColorScheme,
SafeAreaView
} from 'react-native'

function AppPro():JSX.Element{
    const isDarkMode=useColorScheme ()==='dark'

return(
<View style={style.container}>
<Text style={isDarkMode ? style.whiteText: style.darkText}>
    Hello World
</Text>

</View>

)


}

const style=StyleSheet.create({
    container:{
        flex:1,

        alignItems:'center',
        justifyContent:'center'
        
    },
    whiteText:{
        color:'#ffffff'
    },
    darkText:{
        color:'#000000'
    }

})

export default AppPro;