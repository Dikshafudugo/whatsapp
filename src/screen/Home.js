import { StatusBar, useState } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView, text, TouchableOpacity, onPress, } from 'react-native';
import { AntDesign, Entypo, Feather, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons'; 

import {Layout} from './../common/Layout.js'
import InstaStory from 'react-native-insta-story';

import Feedstory from "./../components/Feedstory.js" 
import Feed from "./../components/Feed.js" 
import {PlusIcon, ChatIcon, HomeIcon, BottomTabSvg, BottomSearch, StoreIcon} from "./../components/Figmaicons.js" 

import pic1 from "../../assets/01.jpg" ;
import pic2 from "../../assets/02.jpg" ;
import pic3 from "../../assets/03.jpg" ;
import pic4 from "../../assets/04.jpg" ;
import pic5 from "../../assets/05.jpg" ;
import Storyborder from "../../assets/storyborder.png" ;

export default function Home({navigation}) {
    
  const data = [
    {
        user_id: 1,
        user_image: "https://i.pinimg.com/236x/85/30/ea/8530ea9014e1e8baf7857235a093eba5.jpg",
        user_name: "ahmed_khan87",
        stories: [
            {
                story_id: 1,
                story_image: "https://images.unsplash.com/photo-1611068813580-b07ef920964b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbHBhcGVyJTIwZm9yJTIwbW9iaWxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
                swipeText:'Custom swipe text for this story',
                onPress: () => console.log('story 1 swiped'),
            },
            {
                story_id: 2,
                story_image: "https://images.unsplash.com/photo-1610987039121-d70917dcc6f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2FsbHBhcGVyJTIwZm9yJTIwbW9iaWxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            }
          ]
    },
    {
        user_id: 2,
        user_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvwo5eQWZf5PSdjRAgPco3EniTc4of4i_FHg&usqp=CAU',
        user_name: "vishal_sharma",
        stories: [
            {
                story_id: 1,
                story_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ9UvidVBRZFWUxi6n3AYrgpG9fCFcxIC9ggnHBeEAC_91jYZoM_6iXRrqt9r_qz1NL24&usqp=CAU",
                swipeText:'Custom swipe text for this story',
                onPress: () => console.log('story 1 swiped'),
            }
          ]
    },
    {
        user_id: 3,
        user_image: 'https://assets.vogue.in/photos/5d288836e2f0130008fa5d30/3:4/w_1080,h_1440,c_limit/model%20nidhi%20sunil.jpg',
        user_name: "alishx43",
        stories: [
            {
                story_id: 1,
                story_image: "https://e0.pxfuel.com/wallpapers/34/770/desktop-wallpaper-moon-at-26-06-08-atmosphere-birtay-2008.jpg",
                swipeText:'Custom swipe text for this story',
                onPress: () => console.log('story 1 swiped'),
            },
            {
                story_id: 2,
                story_image: "https://e1.pxfuel.com/desktop-wallpaper/370/258/desktop-wallpaper-6-beautiful-space-iphone-planets-thumbnail.jpg",
                swipeText:'Custom swipe text for this story',
                onPress: () => console.log('story 2 swiped'),
            }]
    },
    {
        user_id: 4,
        user_image: 'https://stylesatlife.com/wp-content/uploads/2021/06/Manu-Bora.jpg',
        user_name: "manishx43",
        stories: [
            {
                story_id: 1,
                story_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpX97YB2evaJJeJG4yesMhj30JDCtyEYZ525iSgvzfOI5jJIleWlyeoGl3XJ0ink7FFXg&usqp=CAU",
                swipeText:'Custom swipe text for this story',
                onPress: () => console.log('story 1 swiped'),
            }
          ]
    },
    {
        user_id: 5,
        user_image: 'https://images.unsplash.com/photo-1610509528015-e4c30d95a5cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmVtYWxlJTIwbW9kZWx8ZW58MHx8MHx8&w=1000&q=80',
        user_name: "joseph_12",
        stories: [
            {
                story_id: 1,
                story_image: "https://wallpaperaccess.com/full/57159.jpg",
                swipeText:'Custom swipe text for this story',
                onPress: () => console.log('story 1 swiped'),
            },
          ]
    },
    
  ];

    
    
    const feedData = [
                      { 
                        username:'sangha-k', 
                        img: pic1, 
                        feedimg: pic1, 
                      },
                      { 
                        username:'_suraj_01', 
                        img: pic2, 
                        feedimg: pic2, 
                      },
                      { 
                        username:'jimmy_K', 
                        img: pic4, 
                        feedimg: pic4, 
                      },
                      { 
                        username:'pk_01', 
                        img: pic3, 
                        feedimg: pic3, 
                      },
                      { 
                        username:'sangha-K', 
                        img: pic5, 
                        feedimg: pic5, 
                      },
                      { 
                        username:'_suraj_01',
                        img: pic1, 
                        feedimg: pic1, 
                      },
                    ];


  return (
    <Layout isHeader={true}  >
        <View className="bg-black" >
          <View horizontal={true} showsHorizontalScrollIndicator={false}>
           <InstaStory data={data}
            unPressedBorderColor={'#FF912F'}
            duration={15}
            onStart={item => console.log(item)}
            onClose={item => console.log('close: ', item)}
            className="pl-2 pr-3"
            customSwipeUpComponent={
              <View>
                <Text>Swipe</Text>
              </View>}/>
          </View>
          <View className="mx-5 -mt-5">
            {feedData.map((feed, index) => {
              return(
                <Feed feed={feed} key={`feed-${index}`}/>
              )
            })}
          </View>
        </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
});
