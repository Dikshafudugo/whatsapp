// screen/ViewPage.js

import React from 'react';
import { View, Text, Button, FlatList,TouchableOpacity, Image } from 'react-native';
import { styled } from 'nativewind';

const Container = styled(View);
const Title = styled(Text);

const ViewPage = ({ route, navigation }) => {
  const { userId } = route.params; // Get userId from navigation params

  // Sample user data (replace with actual data retrieval logic)
  const user = { id: userId, name: `User ${userId}`, avatar: `https://randomuser.me/api/portraits/men/${userId}.jpg` };

  return (
    <Container className="flex-1 justify-center items-center bg-white p-4">
      <Title className="text-2xl font-bold mb-4">User Details</Title>
      
      <Title className="text-lg mb-2">{user.name}</Title>
      <Image source={{ uri: user.avatar }} className="w-24 h-24 rounded-full mb-4" />

      <Button
        title="Back to Chat"
        onPress={() => navigation.navigate('Chat')}
        className="mt-4"
      />
    </Container>
  );
};

export default ViewPage;
