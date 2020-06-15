import React, { useContext } from 'react'
import { View, Text, FlatList, StyleSheet, Button } from 'react-native'
import BlogContext from '../context/BlogContext'


const IndexScreen = () => {

    const {data, addBlogPost} = useContext(BlogContext)
    // console.log(blogPosts)

    return (
        <View>
            <Button 
                onPress={addBlogPost}
                title='Add Post' />

            <FlatList  
                data={data}
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