import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RootPage = (props) => {
  return (
    <SafeAreaView style={styles.root}>
      {props.children}
    </SafeAreaView>
  )
}

export default RootPage

const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "#f0f0f0"
    }
})