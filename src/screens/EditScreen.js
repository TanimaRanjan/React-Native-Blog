import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { Context } from '../context/BlogContext'


const EditScreen = ({navigation}) => {

    const id = navigation.getParam('id')
    const { state, addBlogPost } = useContext(Context)

    const blog = state.find((blogPost) => blogPost.id === id )

    const [title, setTitle] = useState(blog.title)
    const [content, setContent] = useState(blog.content)

    return (
        <View style={style.viewStyle}>
        <Text style={style.titleStyle}>Edit Blog</Text>
        <Text>Title :</Text>
        <TextInput
            style={style.inputStyle}
            autoCapitalize="none"
            autoCorrect={false}
            value={title}
            onChangeText={text =>  setTitle(text) }
      />
      <Text>Content :</Text>
      <TextInput
            style={style.inputStyle}
            autoCapitalize="none"
            autoCorrect={false}
            value={content}
            onChangeText={blog =>  setContent(text)}
      />
      <Button 
        onPress={() => {
            addBlogPost(title, content,
                 () => navigation.navigate('Index'))
        }}
        title='Add Post' 
        />
    </View>
        )
}

const style = StyleSheet.create({
    viewStyle: {
        margin: 20,
        padding: 20,
        flex: 1,
        // justifyContent:"center",
      },
      titleStyle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
      },
      inputStyle: {
        fontSize: 20,
        height: 40,
        borderColor: "grey",
        borderWidth: 1,
        marginTop: 15,
        marginBottom: 15,
      },
      contentStyle: {
        fontSize: 15,
      },
})

export default EditScreen