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
            <Text style={style.titleStyle}>{blogPost.title}</Text>
            <Text style={style.contentStyle}>{blogPost.content}</Text>
        </View>
        )
}

const style = StyleSheet.create({
    viewStyle:{
        margin:20,
        padding:20,
        flex:1,
        // justifyContent:"center",

    },
    titleStyle: {
        fontSize:18,
        fontWeight:'bold',
        marginBottom:10,
        textAlign:"center"
    },
    contentStyle: {
        fontSize:15
    }
})

export default ShowScreen