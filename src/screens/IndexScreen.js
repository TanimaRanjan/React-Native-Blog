import React, { useContext } from 'react'
import { View, Text, FlatList, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

const IndexScreen = ({navigation}) => {

    const {state, addBlogPost, deleteBlogPost} = useContext(Context)
    // console.log(blogPosts)

    return (
        <View style={style.viewStyle}>
            <Button 
                onPress={addBlogPost}
                title='Add Post' />

            <FlatList  
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({item})=> {
                    return  (
                        <TouchableOpacity 
                            onPress={() => navigation.navigate('Show', {id:item.id})} >
                            <View style={style.itemStyle}>
                                <Text style={style.titleStyle}>{item.title}- {item.id}</Text>
                                <TouchableOpacity
                                    onPress={()=> {deleteBlogPost(item.id)}}>
                                    <Feather name="trash" style={style.iconStyle}  />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity> 
                    )
                }}
            
            />
        </View>
    )
}


IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Create')}>
          <AntDesign name="plus" style={style.plusIconStyle} />
          </TouchableOpacity>
        ),
      };
    
}


const style = StyleSheet.create({
    titleStyle: {
        fontSize:18
    }, 
    viewStyle : {
        flex:1,
        justifyContent:"center",
        borderBottomWidth:1,  
        borderColor:'grey'

    },
    itemStyle: {
        borderTopWidth:1,
        // borderBottomWidth:1,  
        borderColor:'grey',
        paddingVertical:20,
        paddingHorizontal:15,
        // marginVertical:5,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    iconStyle: {
        fontSize:24
    },
    plusIconStyle:{
        fontSize:24,
        marginRight:10,
        paddingHorizontal:10
    }
})

export default IndexScreen