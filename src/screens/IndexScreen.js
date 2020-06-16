import React, { useContext } from 'react'
import { View, Text, FlatList, StyleSheet, Button } from 'react-native'
import { Context } from '../context/BlogContext'


const IndexScreen = () => {

    const {state, addBlogPost} = useContext(Context)
    // console.log(blogPosts)

    return (
        <View>
            <Button 
                onPress={addBlogPost}
                title='Add Post' />

            <FlatList  
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({item})=> {
                    return <Text>{item.title}</Text>
                }}
            
            />
        </View>
    )
}

const style = StyleSheet.create({
    textStyle: {

    }, 
    viewStyle : {

    }
})

export default IndexScreen