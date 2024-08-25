import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';


const WelcomeScreen = ({ navigation }: any) => {

    const handlePress = () => {
        navigation.replace("Home")
    }

    return (
        <View className="flex-1 justify-center items-center bg-slate-900">
            <Text>WelcomeScreen</Text>
            <Icon.Button name="sign-in" backgroundColor="#FFF" color={"#3b5998"} onPress={handlePress}>
                <Text className="text-black">
                    Login 
                </Text>
            </Icon.Button>
        </View>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({})