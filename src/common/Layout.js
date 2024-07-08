import React, {useState} from "react";
import { Text, View, Image, ScrollView, StyleSheet,  TouchableOpacity, NativeModules, Dimensions } from "react-native";
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';

import BottomTab from './../components/BottomTab.js'
import Tab from './../components/Tab.js'
import ChatInput from './../components/ChatInput.js'
import {PlusIcon, BackIcon, ChatIcon, HeartIcon,BlackBackIcon, BlackHeartIcon, LocationIcon, MoreIcon } from "./../components/Figmaicons.js"

import men from "../../assets/men.jpg" 
import logo from "../../assets/logo.png" 
import girl from "../../assets/girl.jpg" 

const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT+10;
const windowHeight = Dimensions.get('window').height;


const RenderHeader = (props) => {
  const navigation = useNavigation();

  let openImagePickerAsync = async () => {
      let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (permissionResult.granted === false) {
        alert("Permission to access camera roll is required!");
        return;
      }

      let pickerResult = await ImagePicker.launchImageLibraryAsync();
      console.log(pickerResult);
    }

    const profileData = [
                      { img: men, },
                      { img: girl, },
                    ];

  return(
    <View>
      {!props.bgBlack &&
          <View style={styles.main} className="items-center flex-row justify-between px-5  bg-black pt-10 pb-3">
            <TouchableOpacity style={styles.button}
              onPress={() => {
                if(!props.isBack)
                  props.navigation.navigate("Home")
                else
                  props.navigation.goBack();
              }}> 
              {!props.isBack &&
                  <PlusIcon/>
                }
                {props.isBack &&
                  <BackIcon />
                }
            </TouchableOpacity>
            <Image source={logo} style={styles.logo} />
            <TouchableOpacity style={styles.button}
              onPress={() => {
                if(!props.isEnter)
                  props.navigation.navigate("Chat")
                else
                  props.navigation.goBack();
              }}>
              {!props.isEnter &&
                  <ChatIcon />
                }
                {props.isEnter &&
                  <HeartIcon />
                }
            </TouchableOpacity>
          </View>
      }

      {props.forProfile &&
          <View style={styles.main} className="items-center flex-row justify-between px-5  bg-black pt-10 pb-3 ">
            <TouchableOpacity className="mr-8" style={styles.button}
              onPress={() => {
                if(!props.isBack)
                  props.navigation.navigate("Home")
                else
                  props.navigation.goBack();
              }}> 
              {!props.isBack &&
                  <PlusIcon/>
                }
                {props.isBack &&
                  <BackIcon />
                }
            </TouchableOpacity>
            <Image source={logo} style={styles.logo} />
            <View className="w-16 flex-row justify-between">
              <LocationIcon className=""/>
              <TouchableOpacity style={styles.button}
                onPress={() => {
                  if(!props.isEnter)
                    props.navigation.navigate("Chat")
                  else
                    props.navigation.goBack();
                }}>
                {!props.isEnter &&
                    <ChatIcon />
                  }
                  {props.isEnter &&
                    <HeartIcon />
                  }
              </TouchableOpacity>
            </View>
          </View>
      }

      {props.forChat &&
        <View>
          <View style={styles.chatmenu} className="px-4 pb-3 pt-10 flex-row justify-between items-center ">
            <TouchableOpacity className="mr-8" style={styles.button}
              onPress={() => {
                if(!props.isBack)
                  props.navigation.navigate("Chat")
                else
                  props.navigation.goBack();
              }}> 
              {!props.isBack &&
                  <BackIcon />
                }
                {props.isBack &&
                  <PlusIcon/>
                }
            </TouchableOpacity>
            <View className="w-5/6">
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center">
                  <Image source={men} className="w-10 h-10 rounded-full mr-3.5" />
                  <View className="pb-2">
                    <Text className="text-white text-sm font-bold  mb-1 ">John Thomas</Text>
                    <Text className="text-zinc-300   text-xs font-semibold">_alfa.design</Text>
                  </View>
                </View>
                <View>
                  <MoreIcon/>
                </View>
              </View>
            </View>
          </View>
          <LinearGradient start={{ x: 0, y: 0 }} end={{x: 1, y: 1 }} colors={[ '#FF912F', '#F51CB3' ]} style={styles.Gradient} className="w-full">
          </LinearGradient>
        </View>
      }


      {props.bgWhite &&
        <View style={styles.main} className="items-center flex-row justify-between px-5  bg-transparent pt-10 pb-3">
          <TouchableOpacity style={styles.button}
            onPress={() => {
              if(!props.isBack)
                props.navigation.navigate("Home")
              else
                props.navigation.goBack();
            }}> 
            {!props.isBack &&
                <PlusIcon/>
              }
              {props.isBack &&
                <BlackBackIcon />
              }
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
            onPress={() => {
              if(!props.isEnter)
                props.navigation.navigate("Chat")
              else
                props.navigation.goBack();
            }}>
            {!props.isEnter &&
                <ChatIcon />
              }
              {props.isEnter &&
                <BlackHeartIcon />
              }
          </TouchableOpacity>
        </View>
      }
    </View>
  )
}


export function Layout(props){
  const navigation = useNavigation();
  const [isSticky, setIsSticky] = useState(false);
  return (
    <View style={styles.container} className=" bg-black w-full ">
      <ScrollView 
        style={styles.ScrollContainer} 
        stickyHeaderIndices={[0]}
        onScroll={event => {
            const y = event.nativeEvent.contentOffset.y;
            if( y > STATUSBAR_HEIGHT ){
              setIsSticky(true);
            }else{
              setIsSticky(false);
            }
          }
        }
        showsVerticalScrollIndicator={false}
      > 
        {props.isHeader && 
          <>
            <RenderHeader navigation={navigation} isBack={props.isBack} isEnter={props.isEnter} bgWhite={props.bgWhite} forProfile={props.forProfile} bgBlack={props.bgBlack} isMenu={props.isMenu} forChat={props.forChat} resizeHeader={props.resizeHeader}/>
          </>
        }
        <View style={styles.childContainer} >
          {props.children}
        </View>

        <View className="mb-24"></View>
      </ScrollView>
      {!props.hideBottomTab &&
        <Tab/>
      }
      {props.forChat &&
      <View style={styles.chatfieldcontainer}>
        <ChatInput/>
        </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
  },
  ScrollContainer:{
    height:'100%'
  },
  logo:{
    width: 100,
    height: 24,
  },
  chatmenu:{
    backgroundColor: '#0D0D0D'
  },
  Gradient:{
    height: 1
  },
  chatfieldcontainer:{
    marginTop: -80
  }
});
