import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'

const ShowScreen = ({navigation}) => {

    const id = navigation.getParam('id')
    const { state } = useContext(Context)

    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'))

    // console
    return (
        <View style={style.viewStyle}>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
        )
}

const style = StyleSheet.create({
    viewStyle:{
        flex:1,
    
    },
    textStyle: {

    }
})

export default ShowScreen