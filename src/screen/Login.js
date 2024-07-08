import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import { styled } from 'nativewind';

const Container = styled(View);
const Label = styled(Text);
const Input = styled(TextInput);
const Button = styled(TouchableOpacity);
const ButtonText = styled(Text);

const Login = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleNext = () => {
    setModalVisible(true);
  };

  const handleOk = () => {
    setModalVisible(false);
    navigation.navigate('Chat');
  };

  return (
    <Container className="flex-1 justify-center items-center bg-white">
      <Container className="w-4/5">
        <Label className="text-lg font-semibold mb-4 text-red-600">
          Enter your phone number
        </Label>
        <Input
          className="w-full h-12 border border-gray-300 rounded-lg px-4 mb-4"
          placeholder="Phone number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <Button className="w-full h-12 bg-green-500 rounded-lg justify-center items-center" onPress={handleNext}>
          <ButtonText className="text-white text-lg font-semibold">
            Next
          </ButtonText>
        </Button>
      </Container>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
      >
        <Container className="flex-1 justify-center items-center bg-black bg-opacity-50">
          <Container className="w-4/5 bg-white p-6 rounded-lg">
            <Label className="text-lg font-semibold mb-4">Successfully Logged In</Label>
            <Button className="w-full h-12 bg-blue-500 rounded-lg justify-center items-center" onPress={handleOk}>
              <ButtonText className="text-white text-lg font-semibold">
                OK
              </ButtonText>
            </Button>
          </Container>
        </Container>
      </Modal>
    </Container>
  );
};

export default Login;
