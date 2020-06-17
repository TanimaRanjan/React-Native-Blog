import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button} from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

//   const id = navigation.getParam("id");
  const { addBlogPost } = useContext(Context);

//   const blogPost = state.find(
    // (blogPost) => blogPost.id === navigation.getParam("id")
//   );

  return (
    <View style={style.viewStyle}>
        <Text style={style.titleStyle}>New Blog</Text>
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
            onChangeText={text =>  setContent(text)}
      />
      <Button 
        onPress={() => {
            addBlogPost(title, content,
                 () => navigation.navigate('Index'))
        }}
        title='Add Post' 
        />
    </View>
  );
};

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
});

export default CreateScreen;
