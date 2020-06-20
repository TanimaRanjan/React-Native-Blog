import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'


const EditScreen = ({navigation}) => {

    const id = navigation.getParam('id')
    const { state, editBlogPost } = useContext(Context)

    const blog = state.find((blogPost) => blogPost.id === id )
 
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