import React, { useState } from 'react';
import { View, Text, Button, FlatList,TouchableOpacity, Image } from 'react-native';
import { styled } from 'nativewind';

const Container = styled(View);
const Title = styled(Text);
const Avatar = styled(Image);
const UserName = styled(Text);
const ButtonComponent = styled(Button);

// Sample user data
const usersData = [
  { id: '1', name: 'User 1', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { id: '2', name: 'User 2', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
  { id: '3', name: 'User 3', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
  // Add more users as needed
];

const Chat = ({ navigation }) => {
    const [users, setUsers] = useState(usersData);

    const handleUserPress = (userId) => {
      // Navigate to ViewPage with the user ID or any necessary data
      navigation.navigate('ViewPage', { userId });
    };

  const renderUserItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => handleUserPress(item.id)}
      className="flex-row items-center bg-gray-200 rounded-full p-4 mb-4"
    >
      <Avatar
        source={{ uri: item.avatar }}
        className="w-12 h-12 rounded-full mr-4"
      />
      <UserName className="text-lg">{item.name}</UserName>
    </TouchableOpacity>
  );

  return (
    <Container className="flex-1 justify-center items-center bg-white p-4">
      <Title className="text-2xl font-bold mb-4">Chat Screen</Title>
      
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={renderUserItem}
        className="w-full"
      />

      <ButtonComponent
        title="Back to Login"
        onPress={() => navigation.navigate('Login')}
        className="mt-4"
      />
    </Container>
  );
};

export default Chat;
