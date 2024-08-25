import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({ navigation }: any) => {
  return (
    <View className="flex-1  justify-center items-center bg-slate-900">
      <Text>HomeScreen</Text>
      <Text>Welcome </Text>
      <Icon name='heart' color={"#FF0000"} size={32}/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})