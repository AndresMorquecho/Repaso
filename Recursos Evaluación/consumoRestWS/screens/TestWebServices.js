import { View, StyleSheet } from 'react-native'
import { Button, Text } from '@rneui/base'
import{getAllPostsService, createPostService,updatePostService,getByUserIdService,getFakeStoreApi, PostFakeStoreApi, PutFakeStoreApi, getProveedores} from '../services/TestServices'




const getProv=()=>{
  getProveedores();
}


const putFakeStore=()=>{
  PutFakeStoreApi();
}

const postFakeStore=()=>{
  PostFakeStoreApi();
}

const getFakeStore=()=>{
  getFakeStoreApi();
}


const getAllPosts=()=>{
  getAllPostsService();
}

const createPost =()=>{
  createPostService();
}

const UpdatePost =()=>{
  updatePostService();
}

const getByUserId =()=>{
  getByUserIdService();
}

export const TestWebServices = () => {

  return <View style={styles.container}>
    <Text style={styles.textContainer}> Navegacion</Text>
    <View style={styles.buttonContainer}>
      <Button
        title="Recuperar Posts"
        onPress={getAllPosts}
      />
      <Button
        title="Crear Post"
        onPress={createPost}
      />
        <Button
        title="Actualizar Post"
        onPress={UpdatePost}
      />
        <Button
        title="Filtrar"
        onPress={getByUserId}
      />
          <Button
        title="Get Fake Store"
        onPress={getFakeStore}
      />

      <Button
        title="Post Fake Store"
        onPress={postFakeStore}
      />

      <Button
        title="Put Fake Store"
        onPress={putFakeStore}
      />
      

      <Button
        title="Traer Proveedores | Inventarios"
        onPress={getProv}
      />
            
    </View>
  </View>
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  textContainer: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 10
  },
  buttonContainer: {
    flex: 6,
    alignItems: 'stretch',
    justifyContent: 'space-around',
    marginHorizontal:10

  }
});