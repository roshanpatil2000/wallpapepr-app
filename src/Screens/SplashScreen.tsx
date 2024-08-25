import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'


const SplashScreen = ({navigation}:any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Home")
    }, 5000);
  }, [])
  

  return (
    <View className="flex-1 flex-row justify-center items-center bg-slate-900">
      <Text>SplashScreen</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})