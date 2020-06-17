import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'; 

const ShowScreen = ({navigation}) => {

    const id = navigation.getParam('id')
    const { state } = useContext(Context)

    const blogPost = state.find((blogPost) => blogPost.id === id)

    // console
    return (
        <View style={style.viewStyle}>
            <Text style={style.titleStyle}>{blogPost.title}</Text>
            <Text style={style.contentStyle}>{blogPost.content}</Text>
        </View>
        )
}

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('EditScreen', {id:navigation.getParam('id')})}>
          <Feather name="edit" style={style.editIconStyle} /> 
          </TouchableOpacity>
        ),
      };
    
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
    },
    editIconStyle:{
        fontSize:24,
        marginRight:10,
        paddingHorizontal:10
    }
})

export default ShowScreen