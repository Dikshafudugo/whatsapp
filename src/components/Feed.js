import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, text, TouchableOpacity, onPress, Button, Pressable, Alert, ScrollView, TextInput, onChangeText, Modal} from 'react-native';
import { AntDesign, Entypo, Ionicons, FontAwesome} from '@expo/vector-icons';
import DoubleClick from "react-native-double-click-instagram";
import { useNavigation } from '@react-navigation/native';


import { MsgIcon, BookmarkIcon, SaveIcon, SendIcon} from "./../components/Figmaicons.js" 
import UserComment from "./../components/UserComment.js" 

import girl from "../../assets/girl.jpg" ;
import Storyborder from "../../assets/storyborder.png" ;
import boy from "../../assets/boy.jpg" ;
import pic1 from "../../assets/01.jpg" ;
import pic2 from "../../assets/02.jpg" ;
import pic3 from "../../assets/03.jpg" ;
import pic4 from "../../assets/04.jpg" ;
import pic5 from "../../assets/05.jpg" ;

export default function Feed({feed}) {

  const navigation = useNavigation();

  const [isFavorite, setIsFavorite] = useState(false);
  const [isSave, setIsSave] = useState(false);

   const [modalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };


   const eventData = [
                      {
                        username:'sangha-k', 
                        chatImg: pic5, 
                        incomingMsg: 'how are you ?',
                        msgcount:'2',
                        status : 'recieved',
                      },
                      {
                        username:'_suraj_01', 
                        chatImg: pic3, 
                        incomingMsg: 'how are you ?',
                        msgcount:'10',
                        status : 'recieved',
                      },
                      {
                        username:'jimmy_K', 
                        chatImg: pic2, 
                        incomingMsg: 'how are you ?',
                        msgcount:'7',
                        status : 'send',
                      },
                      {
                        username:'pk_01', 
                        chatImg: pic1, 
                        incomingMsg: 'how are you ?',
                        msgcount:'10',
                        status : 'send',
                      },
                      {
                        username:'sangha-K', 
                        chatImg: pic4, 
                        incomingMsg: 'how are you ?',
                        msgcount:'7',
                        status : 'recieved',
                      },
                      {
                        username:'_suraj_01', 
                        chatImg: pic2, 
                        incomingMsg: 'how are you ?',
                        msgcount:'4',
                        status : 'send',
                      },
                      {
                        username:'sangha-k', 
                        chatImg: pic5, 
                        incomingMsg: 'Dude!!!',
                        msgcount:'4',
                        status : 'send',
                      },
                      {
                        username:'_suraj_01', 
                        chatImg: pic1, 
                        incomingMsg: 'Beutiful..',
                        msgcount:'4',
                        status : 'send',
                      },
                      {
                        username:'jimmy_K', 
                        chatImg: pic4, 
                        incomingMsg: 'Love... Love... Love...',
                        msgcount:'4',
                        status : 'send',
                      },
                      {
                        username:'pk_01', 
                        chatImg: pic3, 
                        incomingMsg: 'Awesome...',
                        msgcount:'4',
                        status : 'send',
                      },
                      {
                        username:'sangha-K', 
                        chatImg: pic3, 
                        incomingMsg: 'Lovely',
                        msgcount:'4',
                        status : 'send',
                      },
                      {
                        username:'_suraj_01', 
                        chatImg: pic3, 
                        incomingMsg: 'Hey great work',
                        msgcount:'4',
                        status : 'send',
                      },
                    ];

  return (
    <View className="w-full mt-5">
       <View>
          <View className="flex-row items-center justify-between mb-4">
            <View className="flex-row items-center">
              <ImageBackground source={Storyborder} resizeMode="cover" style={styles.storyborder} className="justify-center items-center">
                <Image source={feed.img} style={styles.contentimg} className="rounded-full" />
              </ImageBackground>
              <TouchableOpacity onPress={onPress} >
                <Text style={styles.contentname} className="text-white text-base font-medium ml-2.5">{feed.username}</Text>
              </TouchableOpacity>
            </View>
            <View> 
              <Entypo name="dots-three-horizontal" size={17} color="white" />
            </View>
          </View>
          <View className="w-full h-96">
            <DoubleClick
              icon
              delay={300}
              timeout={1000}
              size={80}
              doubleClick={() => console.log("double-click")}
            >
              <View>
                <Image source={feed.feedimg} className="w-full h-96" />
              </View>
            </DoubleClick>
          </View>
          <View style={styles.contentinfo} className="pt-4 pb-4 rounded-b-xl ">
            <View style={styles.contenticon} className="flex-row justify-around items-center mb-1 pb-2 px-8">
              <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
                {isFavorite == false &&
                  <Ionicons name="heart-outline" size={23} color="white" />
                }
                {isFavorite == true &&
                  <Ionicons name="heart-sharp" size={23} color="red" />
                }
              </TouchableOpacity>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(!modalVisible);
                }}>
                <View className="pt-8">
                  <View style={styles.modalView} >
                    <View style={styles.commentMain} className="w-full h-full font-center">
                      <Pressable
                          style={[styles.button, styles.buttonOpen]}
                          onPress={() => setModalVisible(false)}>
                        <View className="d-flex items-center justify-center p-4">
                            <View style={styles.closeBar}></View>
                        </View>
                      </Pressable>
                      <ScrollView>
                        <View style={styles.chatScreen} className="px-4 mt-2">
                          <View style={styles.chatbox} className="">
                            {eventData.map((CommentField, CommentModal) => {
                              return(
                                <UserComment CommentField={CommentField} key={`CommentField-${CommentModal}`}/>
                              )
                            })}
                          </View>
                        </View>
                      </ScrollView>
                      <View style={styles.chatbottom} className="w-full px-4 py-5 flex-row justify-between">
                        <View style={styles.typemsg} className=" rounded-full flex-row items-center justify-between pl-3 pr-1">
                          <TextInput style={styles.block} placeholder="Drop a comment..."  placeholderTextColor='#CCCCCC' onChangeText={onChangeText} value={text} />
                          <TouchableOpacity>
                            <SendIcon/>
                          </TouchableOpacity>
                        </View>
                      </View>
                      <StatusBar style="light" />
                    </View>
                  </View>
                </View>
              </Modal>
              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}><MsgIcon/></Text>
              </Pressable>
              <TouchableOpacity onPress={()=> navigation.navigate('Pinch')}>
                <Ionicons name="paper-plane-outline" size={20} color="white" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setIsSave(!isSave)}>
                {isSave == false &&
                  <BookmarkIcon/>
                }
                {isSave == true &&
                  <SaveIcon/>
                }
              </TouchableOpacity>
            </View>
            <View className="flex-row ml-2.5 mb-1">
              <Image source={girl} className="w-5 h-5 rounded-full" />
              <Text className="text-white ml-1"> Liked by </Text>
              <TouchableOpacity onPress={onPress} >
                <Text className="text-white ml-1">_star_boy</Text>
              </TouchableOpacity>
              <Text className="text-white ml-1"> and </Text>
              <TouchableOpacity onPress={onPress} >
                <Text className="text-white ml-1">5 others</Text>
              </TouchableOpacity>
            </View>
            <View className="flex-row ml-2.5 mb-1">
              <TouchableOpacity onPress={onPress} >
                <Text className="text-white ml-1">_sofiya9</Text>
              </TouchableOpacity>
              <Text className="text-white ml-1"> _I love Dancing :) #Dancing #passion </Text>
            </View>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}>
                <Text style={styles.commentText} className="ml-3 mt-2 font-bold">View all comments</Text>
            </Pressable>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  storyborder:{
    width: 38,
    height: 38,
  },
  contentimg:{
    width: 35,
    height: 35,
  },
  contentinfo:{
    backgroundColor: '#161616',
    shadowColor: 'rgba(151, 151, 151, 0.7)',  
    elevation: 30,
  },
  commentText:{
    color: "#FF912F"
  },
  modalView: {
    width: "100%",
    height: "100%",
    backgroundColor: 'black',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 50,
  },
  chatbottom:{
    backgroundColor: '#0D0D0D',
  },
  typemsg:{
    width:'100%',
    backgroundColor: '#1D1D1D',
    paddingRight: 40,
  },
  block:{
    width: '100%',
    color: '#CCCCCC'
  },
  sendmsg:{
    height: 40,
    width: 40,
    backgroundColor: '#1D1D1D'
  },
  Gradient:{
    height: 1
  },
  commentMain:{
    position: "absolute",
    bottom: 0,
    zIndex: 999
  },
  closeBar:{
    height: 4,
    width: 40,
    backgroundColor: "#787878",
    borderRadius: 10,
  },
});
