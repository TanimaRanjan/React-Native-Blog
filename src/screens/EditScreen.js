import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'


const EditScreen = ({navigation}) => {

    const id = navigation.getParam('id')
    const { state, editBlogPost } = useContext(Context)

    const blog = state.find((blogPost) => blogPost.id === id )

    // const [title, setTitle] = useState(blog.title)
    // const [content, setContent] = useState(blog.content)

    // return (
    //     <View style={style.viewStyle}>
    //     <Text style={style.titleStyle}>Edit Blog</Text>
    //     <Text>Title :</Text>
    //     <TextInput
    //         style={style.inputStyle}
    //         autoCapitalize="none"
    //         autoCorrect={false}
    //         value={title}
    //         onChangeText={text =>  setTitle(text) }
    //   />
    //   <Text>Content :</Text>
    //   <TextInput
    //         style={style.inputStyle}
    //         autoCapitalize="none"
    //         autoCorrect={false}
    //         value={content}
    //         onChangeText={blog =>  setContent(text)}
    //   />
    //   <Button 
    //     onPress={() => {
    //         addBlogPost(title, content,
    //              () => navigation.navigate('Index'))
    //     }}
    //     title='Add Post' 
    //     />
    // </View>
    //     )

        return (
            <BlogPostForm 
                initialValues ={{title:blog.title, content:blog.content}}
                onSubmit={(title, content) => {
                    console.log(title, content)
                    editBlogPost(id, title,content, () => navigation.pop())
                }}
            />
        )
}

const style = StyleSheet.create({
  
})

export default EditScreen